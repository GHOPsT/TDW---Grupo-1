# Code analysis
## TWD_GRUPO1 
#### Version not provided 

**By: Administrator**

*Date: 2024-11-27*

## Introduction
This document contains results of the code analysis of TWD_GRUPO1



## Configuration

- Quality Profiles
    - Names: Sonar way [CSS]; Sonar way [Java]; Sonar way [JavaScript]; Sonar way [HTML]; Sonar way [XML]; 
    - Files: AZLA0SfYUhnVQK0JYNUD.json; AZLA0S-KUhnVQK0JYONU.json; AZLA0SpzUhnVQK0JYNi7.json; AZLA0TDkUhnVQK0JYOVt.json; AZLA0TFcUhnVQK0JYOW8.json; 


 - Quality Gate
    - Name: Sonar way
    - File: Sonar way.xml

## Synthesis

### Analysis Status

Reliability | Security | Security Review | Maintainability |
:---:|:---:|:---:|:---:
B | A | E | A |

### Quality gate status

| Quality Gate Status | OK |
|-|-|



### Metrics

Coverage | Duplications | Comment density | Median number of lines of code per file | Adherence to coding standard |
:---:|:---:|:---:|:---:|:---:
0.0 % | 7.7 % | 9.4 % | 56.5 | 99.3 %

### Tests

Total | Success Rate | Skipped | Errors | Failures |
:---:|:---:|:---:|:---:|:---:
0 | 0 % | 0 | 0 | 0

### Detailed technical debt

Reliability|Security|Maintainability|Total
---|---|---|---
0d 0h 10min|-|0d 3h 43min|0d 3h 53min


### Metrics Range

\ | Cyclomatic Complexity | Cognitive Complexity | Lines of code per file | Coverage | Comment density (%) | Duplication (%)
:---|:---:|:---:|:---:|:---:|:---:|:---:
Min | 0.0 | 0.0 | 0.0 | 0.0 | 0.0 | 0.0
Max | 460.0 | 141.0 | 7907.0 | 0.0 | 58.3 | 100.0

### Volume

Language|Number
---|---
CSS|4137
Java|862
JavaScript|3445
HTML|232
XML|97
Total|8773


## Issues

### Issues count by severity and types

Type / Severity|INFO|MINOR|MAJOR|CRITICAL|BLOCKER
---|---|---|---|---|---
BUG|0|2|0|0|0
VULNERABILITY|0|0|0|0|0
CODE_SMELL|0|8|35|0|0


### Issues List

Name|Description|Type|Severity|Number
---|---|---|---|---
"<table>" tags should have a description|In order to be accessible to visually impaired users, it is important that tables provides a description of its content before the data is <br /> accessed. <br /> The simplest way to do it, and also the one recommended by WCAG2 is to add a <br /> &lt;caption&gt; element inside the &lt;table&gt;. <br /> Other technics this rule accepts are: <br />  <br />    adding a concise description via aria-label or aria-labelledby attributes in the &lt;table&gt;.  <br />    referencing a description element with an aria-describedby <br />   attribute in the &lt;table&gt;.  <br />    embedding the &lt;table&gt; inside a &lt;figure&gt; which also contains a &lt;figcaption&gt;.  <br />    adding a summary attribute to the &lt;table&gt; tag. However note that this attribute has been deprecated in HTML5. <br />    <br />  <br /> See&nbsp;W3C WAI&nbsp;Web Accessibility Tutorials&nbsp;for more information. <br /> This rule raises an issue when a &lt;table&gt; has neither of the previously mentioned description mechanisms. <br /> Noncompliant Code Example <br />  <br /> &lt;table&gt; &lt;!-- Noncompliant --&gt; <br />   ... <br /> &lt;table&gt; <br />  <br /> Compliant Solution <br /> Adding a &lt;caption&gt; element. <br />  <br /> &lt;table&gt; <br />   &lt;caption&gt;New York City Marathon Results 2013&lt;/caption&gt; <br />   ... <br /> &lt;/table&gt; <br />  <br /> Adding an aria-describedby attribute. <br />  <br /> &lt;p id="mydesc"&gt;New York City Marathon Results 2013&lt;/p&gt; <br /> &lt;table aria-describedby="mydesc"&gt; <br />   ... <br /> &lt;/table&gt; <br />  <br /> Embedding the table in a &lt;figure&gt; which also contains a &lt;figcaption&gt;. <br />  <br /> &lt;figure&gt; <br />   &lt;figcaption&gt;New York City Marathon Results 2013&lt;/figcaption&gt; <br />   &lt;table&gt; <br />     ... <br />   &lt;/table&gt; <br /> &lt;/figure&gt; <br />  <br /> Adding a summary attribute.&nbsp;However note that this attribute has been deprecated in HTML5. <br />  <br /> &lt;table summary="New York City Marathon Results 2013"&gt; <br />   ... <br /> &lt;/table&gt; <br />  <br /> Exceptions <br /> No issue will be raised on &lt;table&gt; used for layout purpose, i.e. when it contains a role attribute set to <br /> "presentation" or "none". Note that using &lt;table&gt; for layout purpose is a bad practice. <br /> No issue will be raised either on &lt;table&gt; containing an aria-hidden attribute set to "true". <br /> See <br />  <br />    WCAG2, 1.3.1&nbsp;-&nbsp;Info <br />   and Relationships  <br />    WCAG2,&nbsp;H39 - Using caption elements to associate data table captions with data tables <br />    <br /> |BUG|MINOR|2
Empty blocks should be removed|Leftover empty blocks are usually introduced by mistake. They are useless and prevent readability of the code. They should be removed or completed <br /> with real code. <br /> Noncompliant Code Example <br />  <br /> a { } <br />  <br /> Compliant Solution <br />  <br /> a { color: pink; } <br /> |CODE_SMELL|MAJOR|1
Selectors should not be duplicated|Duplication of selectors might indicate a copy-paste mistake. The rule detects the following kinds of duplications: <br />  <br />    within a list of selectors in a single rule set  <br />    for duplicated selectors in different rule sets within a single stylesheet.  <br />  <br /> Noncompliant Code Example <br />  <br /> .foo, .bar, .foo { ... }  /* Noncompliant */ <br />  <br /> .class1 { ... } <br /> .class1 { ... }  /* Noncompliant */ <br />  <br /> Compliant Solution <br />  <br /> .foo, .bar { ... } <br />  <br /> .class1 { ... } <br /> .class2 { ... } <br /> |CODE_SMELL|MAJOR|3
CSS files should not be empty|This rule raises an issue when a CSS file is empty (ie: containing only spaces).|CODE_SMELL|MAJOR|1
Unused "private" fields should be removed|If a private field is declared but not used in the program, it can be considered dead code and should therefore be removed. This will <br /> improve maintainability because developers will not wonder what the variable is used for. <br /> Note that this rule does not take reflection into account, which means that issues will be raised on private fields that are only <br /> accessed using the reflection API. <br /> Noncompliant Code Example <br />  <br /> public class MyClass { <br />   private int foo = 42; <br />  <br />   public int compute(int a) { <br />     return a * 42; <br />   } <br />  <br /> } <br />  <br /> Compliant Solution <br />  <br /> public class MyClass { <br />   public int compute(int a) { <br />     return a * 42; <br />   } <br /> } <br />  <br /> Exceptions <br /> The rule admits 3 exceptions: <br />  <br />    Serialization id fields  <br />    Annotated fields  <br />    Fields from classes with native methods  <br />  <br /> Serialization id fields <br /> The Java serialization runtime associates with each serializable class a version number, called serialVersionUID, which is used during <br /> deserialization to verify that the sender and receiver of a serialized object have loaded classes for that object that are compatible with respect to <br /> serialization. <br /> A serializable class can declare its own serialVersionUID explicitly by declaring a field named serialVersionUID that <br /> must be static, final, and of type long. By definition those serialVersionUID fields should not be reported by this rule: <br />  <br /> public class MyClass implements java.io.Serializable { <br />   private static final long serialVersionUID = 42L; <br /> } <br />  <br /> Annotated fields <br /> The unused field in this class will not be reported by the rule as it is annotated. <br />  <br /> public class MyClass { <br />   @SomeAnnotation <br />   private int unused; <br /> } <br />  <br /> Fields from classes with native methods <br /> The unused field in this class will not be reported by the rule as it might be used by native code. <br />  <br /> public class MyClass { <br />   private int unused = 42; <br />   private native static void doSomethingNative(); <br /> } <br /> |CODE_SMELL|MAJOR|14
Unused assignments should be removed|A dead store happens when a local variable is assigned a value that is not read by any subsequent instruction. Calculating or retrieving a value <br /> only to then overwrite it or throw it away, could indicate a serious error in the code. Even if it’s not an error, it is at best a waste of resources. <br /> Therefore all calculated values should be used. <br /> Noncompliant Code Example <br />  <br /> i = a + b; // Noncompliant; calculation result not used before value is overwritten <br /> i = compute(); <br />  <br /> Compliant Solution <br />  <br /> i = a + b; <br /> i += compute(); <br />  <br /> Exceptions <br />  <br />    This rule ignores initializations to -1, 0, 1, undefined, [], {}, true, false and "".  <br />    Variables that start with an underscore (e.g. '_unused') are ignored.  <br />    Assignment of null is ignored because it is sometimes used to help garbage collection  <br />    Increment and decrement expressions are ignored because they are often used idiomatically instead of x+1  <br />    This rule also ignores variables declared with object destructuring using rest syntax (used to exclude some properties from object):  <br />  <br />  <br /> let {a, b, ...rest} = obj; // 'a' and 'b' are ok <br /> doSomething(rest); <br />  <br /> let [x1, x2, x3] = arr;    // but 'x1' is noncompliant, as omitting syntax can be used: "let [, x2, x3] = arr;" <br /> doSomething(x2, x3); <br />  <br /> See <br />  <br />    MITRE, CWE-563 - Assignment to Variable without Use ('Unused Variable')  <br /> |CODE_SMELL|MAJOR|4
Ternary operators should not be nested|Just because you can do something, doesn’t mean you should, and that’s the case with nested ternary operations. Nesting ternary operators <br /> results in the kind of code that may seem clear as day when you write it, but six months later will leave maintainers (or worse - future you) <br /> scratching their heads and cursing. <br /> Instead, err on the side of clarity, and use another line to express the nested operation as a separate statement. <br /> Noncompliant Code Example <br />  <br /> function getReadableStatus(job) { <br />   return job.isRunning() ? "Running" : job.hasErrors() ? "Failed" : "Succeeded ";  // Noncompliant <br /> } <br />  <br /> Compliant Solution <br />  <br /> function getReadableStatus(job) { <br />   if (job.isRunning()) { <br />     return "Running"; <br />   } <br />   return job.hasErrors() ? "Failed" : "Succeeded"; <br /> } <br />  <br /> Exceptions <br /> This rule does not apply in JSX expressions to support conditional rendering and conditional attributes. <br />  <br /> return ( <br /> &lt;&gt; <br />   {isLoading ? ( <br />     &lt;Loader active /&gt; <br />   ) : ( <br />     &lt;Panel label={isEditing ? 'Open' : 'Not open'}&gt; <br />       &lt;a&gt;{isEditing ? 'Close now' : 'Start now'}&lt;/a&gt; <br />       &lt;Checkbox onClick={!saving ? setSaving(saving =&gt; !saving) : null} /&gt; <br />     &lt;/Panel&gt; <br />   )} <br /> &lt;/&gt; <br /> ); <br /> |CODE_SMELL|MAJOR|2
No array index for keys in JSX list components|React expects a unique identifier for performance optimizations. An array index is not a stable identifier most of the time. This results in <br /> unnecessary renders when the array items change index following some mutation. When components have state, this might also provoke bugs that are hard <br /> to diagnose. <br /> We recommend using an explicit identifier to avoid misuse and accidental re-renders. If there is no unique attribute available, consider <br /> concatenating existing properties - hashing them if necessary - or creating a dedicated unique identifier. <br /> Noncompliant Code Example <br />  <br /> function generateButtons(props) { <br />   return props.buttons.map((button, index) =&gt; { <br />     &lt;Button key={index}&gt;{button.number}&lt;/Button&gt; <br />   }); <br /> } <br />  <br /> Compliant Solution <br />  <br /> function generateButtons(props) { <br />   return props.buttons.map((button, index) =&gt; { <br />     &lt;Button key={button.number}&gt;{button.number}&lt;/Button&gt; <br />   }); <br /> } <br />  <br /> See <br />  <br />    Recursing On Children - React API reference  <br />    S6477  <br />    S6486  <br /> |CODE_SMELL|MAJOR|9
React Context Provider values should not have non-stable identities|Providing values like an object to a React Context will provoke additional re-renders as React doesn’t know the object is the same. <br /> This can significantly impact performance since the whole component tree will be re-rendered each time. Wrapping the value in a useMemo <br /> hook will avoid additional render passes. <br /> Noncompliant Code Example <br />  <br /> function Component() { <br />   return ( <br />     &lt;SomeContext.Provider value={{foo: 'bar'}}&gt; { /* value is an object expression */ } <br />       &lt;SomeComponent /&gt; <br />     &lt;/SomeContext.Provider&gt; <br />   ); <br /> } <br />  <br /> Compliant Solution <br />  <br /> function Component() { <br />   const foo = useMemo(() =&gt; ({foo: 'bar'}), []); <br />   return ( <br />     &lt;SomeContext.Provider value={foo}&gt; <br />       &lt;SomeComponent /&gt; <br />     &lt;/SomeContext.Provider&gt; <br />   ); <br /> } <br />  <br /> See <br />  <br />    Context Caveats - React documentation  <br /> |CODE_SMELL|MAJOR|1
Return of boolean expressions should not be wrapped into an "if-then-else" statement|Return of boolean literal statements wrapped into if-then-else flow should be simplified. <br /> Note that if the result of the expression is not a boolean but for instance an integer, then double negation should be used for proper <br /> conversion. <br />  <br /> if (expression) { <br />   return true; <br /> } else { <br />   return false; <br /> } <br />  <br /> or <br />  <br /> if (expression) { <br />   return true; <br /> } <br /> return false; <br />  <br /> Compliant Solution <br />  <br /> return expression; <br />  <br /> or <br />  <br /> return !!expression; <br /> |CODE_SMELL|MINOR|1
Unnecessary imports should be removed|There’s no reason to import modules you don’t use; and every reason not to: doing so needlessly increases the load. <br /> Noncompliant Code Example <br />  <br /> import A from 'a';      // Noncompliant, A isn't used <br /> import { B1 } from 'b'; <br />  <br /> console.log(B1); <br />  <br /> Compliant Solution <br />  <br /> import { B1 } from 'b'; <br />  <br /> console.log(B1); <br /> |CODE_SMELL|MINOR|3
Unused local variables and functions should be removed|If a local variable or a local function is declared but not used, it is dead code and should be removed. Doing so will improve maintainability <br /> because developers will not wonder what the variable or function is used for. <br /> Noncompliant Code Example <br />  <br /> function numberOfMinutes(hours) { <br />   var seconds = 0;   // seconds is never used <br />   return hours * 60; <br /> } <br />  <br /> Compliant Solution <br />  <br /> function numberOfMinutes(hours) { <br />   return hours * 60; <br /> } <br /> |CODE_SMELL|MINOR|4


## Security Hotspots

### Security hotspots count by category and priority

Category / Priority|LOW|MEDIUM|HIGH
---|---|---|---
LDAP Injection|0|0|0
Object Injection|0|0|0
Server-Side Request Forgery (SSRF)|0|0|0
XML External Entity (XXE)|0|0|0
Insecure Configuration|1|0|0
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
Others|1|0|0


### Security hotspots

Category|Name|Priority|Severity|Count
---|---|---|---|---
Insecure Configuration|Having a permissive Cross-Origin Resource Sharing policy is security-sensitive|LOW|MINOR|1
Others|Disclosing fingerprints from web application technologies is security-sensitive|LOW|MINOR|1
