# Code analysis
## TWD-FRONT 
#### Version not provided 

**By: Administrator**

*Date: 2024-11-29*

## Introduction
This document contains results of the code analysis of TWD-FRONT



## Configuration

- Quality Profiles
    - Names: Sonar way [CSS]; Sonar way [JavaScript]; Sonar way [HTML]; 
    - Files: AZLA0SfYUhnVQK0JYNUD.json; AZLA0SpzUhnVQK0JYNi7.json; AZLA0TDkUhnVQK0JYOVt.json; 


 - Quality Gate
    - Name: Sonar way
    - File: Sonar way.xml

## Synthesis

### Analysis Status

Reliability | Security | Security Review | Maintainability |
:---:|:---:|:---:|:---:
A | A | A | A |

### Quality gate status

| Quality Gate Status | OK |
|-|-|



### Metrics

Coverage | Duplications | Comment density | Median number of lines of code per file | Adherence to coding standard |
:---:|:---:|:---:|:---:|:---:
0.0 % | 6.5 % | 7.6 % | 55.0 | 99.7 %

### Tests

Total | Success Rate | Skipped | Errors | Failures |
:---:|:---:|:---:|:---:|:---:
0 | 0 % | 0 | 0 | 0

### Detailed technical debt

Reliability|Security|Maintainability|Total
---|---|---|---
-|-|0d 0h 52min|0d 0h 52min


### Metrics Range

\ | Cyclomatic Complexity | Cognitive Complexity | Lines of code per file | Coverage | Comment density (%) | Duplication (%)
:---|:---:|:---:|:---:|:---:|:---:|:---:
Min | 0.0 | 0.0 | 5.0 | 0.0 | 0.0 | 0.0
Max | 174.0 | 56.0 | 2754.0 | 0.0 | 58.3 | 90.3

### Volume

Language|Number
---|---
CSS|1265
JavaScript|1540
HTML|13
Total|2818


## Issues

### Issues count by severity and types

Type / Severity|INFO|MINOR|MAJOR|CRITICAL|BLOCKER
---|---|---|---|---|---
BUG|0|0|0|0|0
VULNERABILITY|0|0|0|0|0
CODE_SMELL|0|2|7|0|0


### Issues List

Name|Description|Type|Severity|Number
---|---|---|---|---
Unused assignments should be removed|A dead store happens when a local variable is assigned a value that is not read by any subsequent instruction. Calculating or retrieving a value <br /> only to then overwrite it or throw it away, could indicate a serious error in the code. Even if it’s not an error, it is at best a waste of resources. <br /> Therefore all calculated values should be used. <br /> Noncompliant Code Example <br />  <br /> i = a + b; // Noncompliant; calculation result not used before value is overwritten <br /> i = compute(); <br />  <br /> Compliant Solution <br />  <br /> i = a + b; <br /> i += compute(); <br />  <br /> Exceptions <br />  <br />    This rule ignores initializations to -1, 0, 1, undefined, [], {}, true, false and "".  <br />    Variables that start with an underscore (e.g. '_unused') are ignored.  <br />    Assignment of null is ignored because it is sometimes used to help garbage collection  <br />    Increment and decrement expressions are ignored because they are often used idiomatically instead of x+1  <br />    This rule also ignores variables declared with object destructuring using rest syntax (used to exclude some properties from object):  <br />  <br />  <br /> let {a, b, ...rest} = obj; // 'a' and 'b' are ok <br /> doSomething(rest); <br />  <br /> let [x1, x2, x3] = arr;    // but 'x1' is noncompliant, as omitting syntax can be used: "let [, x2, x3] = arr;" <br /> doSomething(x2, x3); <br />  <br /> See <br />  <br />    MITRE, CWE-563 - Assignment to Variable without Use ('Unused Variable')  <br /> |CODE_SMELL|MAJOR|1
Ternary operators should not be nested|Just because you can do something, doesn’t mean you should, and that’s the case with nested ternary operations. Nesting ternary operators <br /> results in the kind of code that may seem clear as day when you write it, but six months later will leave maintainers (or worse - future you) <br /> scratching their heads and cursing. <br /> Instead, err on the side of clarity, and use another line to express the nested operation as a separate statement. <br /> Noncompliant Code Example <br />  <br /> function getReadableStatus(job) { <br />   return job.isRunning() ? "Running" : job.hasErrors() ? "Failed" : "Succeeded ";  // Noncompliant <br /> } <br />  <br /> Compliant Solution <br />  <br /> function getReadableStatus(job) { <br />   if (job.isRunning()) { <br />     return "Running"; <br />   } <br />   return job.hasErrors() ? "Failed" : "Succeeded"; <br /> } <br />  <br /> Exceptions <br /> This rule does not apply in JSX expressions to support conditional rendering and conditional attributes. <br />  <br /> return ( <br /> &lt;&gt; <br />   {isLoading ? ( <br />     &lt;Loader active /&gt; <br />   ) : ( <br />     &lt;Panel label={isEditing ? 'Open' : 'Not open'}&gt; <br />       &lt;a&gt;{isEditing ? 'Close now' : 'Start now'}&lt;/a&gt; <br />       &lt;Checkbox onClick={!saving ? setSaving(saving =&gt; !saving) : null} /&gt; <br />     &lt;/Panel&gt; <br />   )} <br /> &lt;/&gt; <br /> ); <br /> |CODE_SMELL|MAJOR|2
No array index for keys in JSX list components|React expects a unique identifier for performance optimizations. An array index is not a stable identifier most of the time. This results in <br /> unnecessary renders when the array items change index following some mutation. When components have state, this might also provoke bugs that are hard <br /> to diagnose. <br /> We recommend using an explicit identifier to avoid misuse and accidental re-renders. If there is no unique attribute available, consider <br /> concatenating existing properties - hashing them if necessary - or creating a dedicated unique identifier. <br /> Noncompliant Code Example <br />  <br /> function generateButtons(props) { <br />   return props.buttons.map((button, index) =&gt; { <br />     &lt;Button key={index}&gt;{button.number}&lt;/Button&gt; <br />   }); <br /> } <br />  <br /> Compliant Solution <br />  <br /> function generateButtons(props) { <br />   return props.buttons.map((button, index) =&gt; { <br />     &lt;Button key={button.number}&gt;{button.number}&lt;/Button&gt; <br />   }); <br /> } <br />  <br /> See <br />  <br />    Recursing On Children - React API reference  <br />    S6477  <br />    S6486  <br /> |CODE_SMELL|MAJOR|3
React Context Provider values should not have non-stable identities|Providing values like an object to a React Context will provoke additional re-renders as React doesn’t know the object is the same. <br /> This can significantly impact performance since the whole component tree will be re-rendered each time. Wrapping the value in a useMemo <br /> hook will avoid additional render passes. <br /> Noncompliant Code Example <br />  <br /> function Component() { <br />   return ( <br />     &lt;SomeContext.Provider value={{foo: 'bar'}}&gt; { /* value is an object expression */ } <br />       &lt;SomeComponent /&gt; <br />     &lt;/SomeContext.Provider&gt; <br />   ); <br /> } <br />  <br /> Compliant Solution <br />  <br /> function Component() { <br />   const foo = useMemo(() =&gt; ({foo: 'bar'}), []); <br />   return ( <br />     &lt;SomeContext.Provider value={foo}&gt; <br />       &lt;SomeComponent /&gt; <br />     &lt;/SomeContext.Provider&gt; <br />   ); <br /> } <br />  <br /> See <br />  <br />    Context Caveats - React documentation  <br /> |CODE_SMELL|MAJOR|1
Unnecessary imports should be removed|There’s no reason to import modules you don’t use; and every reason not to: doing so needlessly increases the load. <br /> Noncompliant Code Example <br />  <br /> import A from 'a';      // Noncompliant, A isn't used <br /> import { B1 } from 'b'; <br />  <br /> console.log(B1); <br />  <br /> Compliant Solution <br />  <br /> import { B1 } from 'b'; <br />  <br /> console.log(B1); <br /> |CODE_SMELL|MINOR|1
Unused local variables and functions should be removed|If a local variable or a local function is declared but not used, it is dead code and should be removed. Doing so will improve maintainability <br /> because developers will not wonder what the variable or function is used for. <br /> Noncompliant Code Example <br />  <br /> function numberOfMinutes(hours) { <br />   var seconds = 0;   // seconds is never used <br />   return hours * 60; <br /> } <br />  <br /> Compliant Solution <br />  <br /> function numberOfMinutes(hours) { <br />   return hours * 60; <br /> } <br /> |CODE_SMELL|MINOR|1


## Security Hotspots

### Security hotspots count by category and priority

Category / Priority|LOW|MEDIUM|HIGH
---|---|---|---
LDAP Injection|0|0|0
Object Injection|0|0|0
Server-Side Request Forgery (SSRF)|0|0|0
XML External Entity (XXE)|0|0|0
Insecure Configuration|0|0|0
XPath Injection|0|0|0
Authentication|0|0|0
Weak Cryptography|0|0|0
Denial of Service (DoS)|0|0|0
Log Injection|0|0|0
Cross-Site Request Forgery (CSRF)|0|0|0
Open Redirect|0|0|0
Permission|0|0|0
SQL Injection|0|0|0
Encryption of Sensitive Data|0|0|0
Traceability|0|0|0
Buffer Overflow|0|0|0
File Manipulation|0|0|0
Code Injection (RCE)|0|0|0
Cross-Site Scripting (XSS)|0|0|0
Command Injection|0|0|0
Path Traversal Injection|0|0|0
HTTP Response Splitting|0|0|0
Others|0|0|0


### Security hotspots

