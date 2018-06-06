[![Commitizen friendly](https://img.shields.io/badge/commitizen-friendly-brightgreen.svg)](http://commitizen.github.io/cz-cli/)

# git-cz

## Usage


##### Without installation

```shell
npx git-cz
```

##### Install globally standalone

```shell
npm install -g git-cz
git-cz
```

##### Install locally with Commitizen

```shell
npm install -g commitizen
npm install --save-dev git-cz
```

and add to `package.json`:

```json
{
  "config": {
    "commitizen": {
      "path": "git-cz"
    }
  },
}
```

now run:

```shell
git cz
```

##### Install globally with Commitizen

```shell
npm install -g commitizen git-cz
commitizen init git-cz --save-dev --save-exact
```

now run:

```shell
git cz
```

## Examples

```
feat: 🎸 add 'graphiteWidth' option
```

```
fix: 🐞 stop graphite breaking when width < 0.1
```

```
perf: ⚡️ remove graphiteWidth option

BREAKING CHANGE: The graphiteWidth option has been removed. The default graphite width of 10mm is always used for performance reason.

Issues: MOL-1234
```

## Custom config

You can provide custom configuration in `changelog.congfig.js` file
in your repo. See [default configuration file](./src/defaults.js) for reference.


## Commit Message Format

* A commit message consists of a **header**, **body** and **footer**.
* The header has a **type** and a **subject**:

```
<type>[(<scope>)]: <emoji> <subject>
[BLANK LINE]
[body]
[BLANK LINE]
[breaking changes]
[BLANK LINE]
[footer]
```

The **header** is the only mandatory part of the commit message.

The first line (type + subject) is limited to 50 characters **[enforced]**

Any other line should be limited to 72 character **[automatic wrapping]**

This allows the message to be easier to read on GitHub as well as in various git tools.

### Type

Must be one of the following:

- `test` &mdash; Adding missing tests
- `feat` &mdash; A new feature
- `fix` &mdash; A bug fix
- `chore` &mdash; Build process or auxiliary tool changes
- `docs` &mdash; Documentation only changes
- `refactor` &mdash; A code change that neither fixes a bug or adds a feature
- `style` &mdash; Markup, white-space, formatting, missing semi-colons...
- `ci` &mdash; CI related changes
- `perf` &mdash; A code change that improves performance


### Subject

The subject contains succinct description of the change:

* Use the imperative, present tense: "change" not "changed" nor "changes"
* No dot (.) at the end.

### Body

Just as in the **subject**, use the imperative, present tense: "change" not "changed" nor "changes".
The body should include the motivation for the change and contrast this with previous behavior.

#### Affects [only on [lerna](https://lernajs.io/) environments]

Select the packages the commit affected.

### Breaking Changes

**Breaking Changes** must start with the words `BREAKING CHANGE: `.

### Footer

The footer is the place to reference any tasks related to this commit.



## Why this Fork?

```
<<<<<<< HEAD
npm i -g git-cz
added 1 package in 0.612s
```

Installs in 0.6s vs 31.1s.

```
npm i -g mol-conventional-changelog
added 345 packages in 31.076s
```
=======
11:10 $ npm i -g mol-conventional-changelog
+ mol-conventional-changelog@1.4.0
added 345 packages in 38.677s
```

>>>>>>> feat: 🎸 add mmarkdown
