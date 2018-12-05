


# codemod-proptypes-to-flow [![Build Status](https://travis-ci.org/billyvg/codemod-proptypes-to-flow.svg?branch=master)](https://travis-ci.org/billyvg/codemod-proptypes-to-flow) [![codecov](https://codecov.io/gh/billyvg/codemod-proptypes-to-flow/branch/master/graph/badge.svg)](https://codecov.io/gh/billyvg/codemod-proptypes-to-flow)

Removes `React.PropTypes` and attempts to transform to [Flow](http://flow.org/).

### Setup & Run
  * `npm install -g jscodeshift@0.5.1`
  * `git clone https://github.com/billyvg/codemod-proptypes-to-flow`
  * `jscodeshift -t codemod-proptypes-to-flow/src/index.js <path>`
  * Use the `-d` option for a dry-run and use `-p` to print the output
    for comparison

Note: Installing the jscodeshift latest has caused issues for folks; recommending an older version.

#### Options
Behavior of this codemod can be customized by passing options to jscodeshift e.g.:
```
jscodeshift -t codemod-proptypes-to-flow/src/index.js --flowComment=line <path>
```

Following options are accepted:

##### flowComment
`--flowComment=<block|line>` - type of flow comment. Defaults to `block`.

```
--flowComment=block:  /* @flow */
--flowComment=line:   // @flow
```

##### propsTypeSuffix
`--propsTypeSuffix=<suffix>` - used to customize the type names generated by the codemod. Provided string will be used alone or appended to Component's name when defining props type. Defaults to `Props`.

Default:
```
type Props = {...}
type MyComponentProps = {...}
```

With `--propsTypeSuffix=PropsType`:
```
type PropsType = {...}
type MyComponentPropsType = {...}
```

### Not working/Implemented yet
  * Custom validators
  * `React.createClass`
  * Use of importing PropTypes

### Contributors
  * Thanks to [@skovhus](https://github.com/skovhus) for adding support for functional components and modernizing the codebase a bit (a lot)
