# Code analysis
## TWD-BACKEND 
#### Version not provided 

**By: Administrator**

*Date: 2024-11-29*

## Introduction
This document contains results of the code analysis of TWD-BACKEND



## Configuration

- Quality Profiles
    - Names: Sonar way [Java]; Sonar way [XML]; 
    - Files: AZLA0S-KUhnVQK0JYONU.json; AZLA0TFcUhnVQK0JYOW8.json; 


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

Metric|Value
---|---
Reliability Rating on New Code|OK
Security Rating on New Code|OK
Maintainability Rating on New Code|OK


### Metrics

Coverage | Duplications | Comment density | Median number of lines of code per file | Adherence to coding standard |
:---:|:---:|:---:|:---:|:---:
0.0 % | 7.1 % | 0.9 % | 38.5 | 100.0 %

### Tests

Total | Success Rate | Skipped | Errors | Failures |
:---:|:---:|:---:|:---:|:---:
0 | 0 % | 0 | 0 | 0

### Detailed technical debt

Reliability|Security|Maintainability|Total
---|---|---|---
-|-|0d 1h 10min|0d 1h 10min


### Metrics Range

\ | Cyclomatic Complexity | Cognitive Complexity | Lines of code per file | Coverage | Comment density (%) | Duplication (%)
:---|:---:|:---:|:---:|:---:|:---:|:---:
Min | 0.0 | 0.0 | 5.0 | 0.0 | 0.0 | 0.0
Max | 81.0 | 7.0 | 862.0 | 0.0 | 20.0 | 58.5

### Volume

Language|Number
---|---
Java|862
XML|77
Total|939


## Issues

### Issues count by severity and types

Type / Severity|INFO|MINOR|MAJOR|CRITICAL|BLOCKER
---|---|---|---|---|---
BUG|0|0|0|0|0
VULNERABILITY|0|0|0|0|0
CODE_SMELL|0|0|14|0|0


### Issues List

Name|Description|Type|Severity|Number
---|---|---|---|---
Unused "private" fields should be removed|If a private field is declared but not used in the program, it can be considered dead code and should therefore be removed. This will <br /> improve maintainability because developers will not wonder what the variable is used for. <br /> Note that this rule does not take reflection into account, which means that issues will be raised on private fields that are only <br /> accessed using the reflection API. <br /> Noncompliant Code Example <br />  <br /> public class MyClass { <br />   private int foo = 42; <br />  <br />   public int compute(int a) { <br />     return a * 42; <br />   } <br />  <br /> } <br />  <br /> Compliant Solution <br />  <br /> public class MyClass { <br />   public int compute(int a) { <br />     return a * 42; <br />   } <br /> } <br />  <br /> Exceptions <br /> The rule admits 3 exceptions: <br />  <br />    Serialization id fields  <br />    Annotated fields  <br />    Fields from classes with native methods  <br />  <br /> Serialization id fields <br /> The Java serialization runtime associates with each serializable class a version number, called serialVersionUID, which is used during <br /> deserialization to verify that the sender and receiver of a serialized object have loaded classes for that object that are compatible with respect to <br /> serialization. <br /> A serializable class can declare its own serialVersionUID explicitly by declaring a field named serialVersionUID that <br /> must be static, final, and of type long. By definition those serialVersionUID fields should not be reported by this rule: <br />  <br /> public class MyClass implements java.io.Serializable { <br />   private static final long serialVersionUID = 42L; <br /> } <br />  <br /> Annotated fields <br /> The unused field in this class will not be reported by the rule as it is annotated. <br />  <br /> public class MyClass { <br />   @SomeAnnotation <br />   private int unused; <br /> } <br />  <br /> Fields from classes with native methods <br /> The unused field in this class will not be reported by the rule as it might be used by native code. <br />  <br /> public class MyClass { <br />   private int unused = 42; <br />   private native static void doSomethingNative(); <br /> } <br /> |CODE_SMELL|MAJOR|14


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

