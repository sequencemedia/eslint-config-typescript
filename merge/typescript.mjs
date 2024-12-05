import typescript from '#eslint-config-typescript/config/typescript'

import {
  mergeLanguageOptions,
  mergeLinterOptions,
  mergeRules,
  mergeSettings
} from '#eslint-config-typescript/common/merge'

/**
 *  name - A name for the configuration object. This is used in error messages and config inspector to help identify which configuration object is being used. (Naming Convention)
 *  files - An array of glob patterns indicating the files that the configuration object should apply to. If not specified, the configuration object applies to all files matched by any other configuration object.
 *  ignores - An array of glob patterns indicating the files that the configuration object should not apply to. If not specified, the configuration object applies to all files matched by files. If ignores is used without any other keys in the configuration object, then the patterns act as global ignores.
 *  languageOptions - An object containing settings related to how JavaScript is configured for linting.
 *    - ecmaVersion - The version of ECMAScript to support. May be any year (i.e., 2022) or version (i.e., 5). Set to "latest" for the most recent supported version. (default: "latest")
 *    - sourceType - The type of JavaScript source code. Possible values are "script" for traditional script files, "module" for ECMAScript modules (ESM), and "commonjs" for CommonJS files. (default: "module" for .js and .mjs files; "commonjs" for .cjs files)
 *    - globals - An object specifying additional objects that should be added to the global scope during linting.
 *    - parser - An object containing a parse() method or a parseForESLint() method. (default: espree)
 *    - parserOptions - An object specifying additional options that are passed directly to the parse() or parseForESLint() method on the parser. The available options are parser-dependent.
 *  linterOptions - An object containing settings related to the linting process.
 *    - noInlineConfig - A Boolean value indicating if inline configuration is allowed.
 *    - reportUnusedDisableDirectives - A severity string indicating if and how unused disable and enable directives should be tracked and reported. For legacy compatibility, true is equivalent to "warn" and false is equivalent to "off". (default: "warn").
 *  processor - Either an object containing preprocess() and postprocess() methods or a string indicating the name of a processor inside of a plugin (i.e., "pluginName/processorName").
 *  plugins - An object containing a name-value mapping of plugin names to plugin objects. When files is specified, these plugins are only available to the matching files.
 *  rules - An object containing the configured rules. When files or ignores are specified, these rule configurations are only available to the matching files.
 *  settings - An object containing name-value pairs of information that should be available to all rules.
 */

export default function merge (configuration) {
  return {
    ...typescript,
    ...configuration,
    languageOptions: mergeLanguageOptions(typescript, configuration),
    linterOptions: mergeLinterOptions(typescript, configuration),
    rules: mergeRules(typescript, configuration),
    settings: mergeSettings(typescript, configuration)
  }
}
