/**
 * Annotates ES2015 Class constructor and Class `props` member
 *
 * @param {jscodeshiftApi} j jscodeshift API
 * @param {Array} body Array of `Node`
 */
export default function annotateConstructor(j, classNode, name = 'Props') {
  const body = classNode.value.body && classNode.value.body.body;
  const typeAnnotation = j.typeAnnotation(
    j.genericTypeAnnotation(j.identifier(name), null)
  );

  // Add props to constructor if present
  body.some((b, i) => {
    if (b.kind === 'constructor') {
      // first parameter is always props regardless of name
      if (b.value.params && b.value.params.length) {
        b.value.params[0].typeAnnotation = typeAnnotation;
      }
      return true;
    }
  });

  // Add type annotation to class
  classNode.value.superClass.property.typeAnnotation = `<${name}>`;
}
