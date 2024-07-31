"use strict";(self.webpackChunkwebsite_miralis=self.webpackChunkwebsite_miralis||[]).push([[173],{6718:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>c,contentTitle:()=>o,default:()=>d,frontMatter:()=>r,metadata:()=>a,toc:()=>l});var s=t(4848),i=t(8453);const r={},o="Contributing",a={id:"Developer/contributing",title:"Contributing",description:"The development of Miralis is done through pull requests against the main branch.",source:"@site/docs/Developer/contributing.md",sourceDirName:"Developer",slug:"/Developer/contributing",permalink:"/docs/Developer/contributing",draft:!1,unlisted:!1,tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Architecture",permalink:"/docs/Developer/architecture"},next:{title:"Terminology",permalink:"/docs/Developer/terminology"}},c={},l=[{value:"Code Style",id:"code-style",level:2}];function h(e){const n={a:"a",code:"code",em:"em",h1:"h1",h2:"h2",p:"p",pre:"pre",strong:"strong",...(0,i.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(n.h1,{id:"contributing",children:"Contributing"}),"\n",(0,s.jsxs)(n.p,{children:["The development of Miralis is done through pull requests against the ",(0,s.jsx)(n.code,{children:"main"})," branch.\nWe strive to maintain a clean linear history for the ",(0,s.jsx)(n.code,{children:"main"})," branch, we rebase all PRs before merging and expect PRs to be rebased against the latest ",(0,s.jsx)(n.code,{children:"main"})," branch."]}),"\n",(0,s.jsxs)(n.p,{children:["An explicit goal is to ensure that all commits in the ",(0,s.jsx)(n.code,{children:"main"})," branch pass the test suite of that commit, in other words ",(0,s.jsx)(n.code,{children:"just test"})," must always succeed.\nTo enforce this the CI run the tests against each new commit when submitting a PR, if you see a failure in the CI check for the details to find out which commit caused the issue.\nOf course writing code requires iteration, a good rule of thumb is to write a first version while committing along the way, and to rework those commits in a second time using tools such as ",(0,s.jsx)(n.code,{children:"git rebase --interactive"})," or ",(0,s.jsx)(n.a,{href:"https://steveklabnik.github.io/jujutsu-tutorial/",children:"jj"}),"."]}),"\n",(0,s.jsx)(n.h2,{id:"code-style",children:"Code Style"}),"\n",(0,s.jsx)(n.p,{children:"This section describes the style we strive to enforce across the code base, and serves as a reference when arbitrary choices need to be made."}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"Comments"}),":"]}),"\n",(0,s.jsx)(n.p,{children:"Comment starts with a leading white space and a capital letter, like this:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-rs",children:"// Our comment style\n"})}),"\n",(0,s.jsxs)(n.p,{children:["But ",(0,s.jsx)(n.strong,{children:"not"})," like this:"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-rs",children:"//We avoid this\n// or this\n//and this\n"})}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"Rust code"}),":"]}),"\n",(0,s.jsx)(n.p,{children:"We always insert a blank line between two functions:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-rs",children:"fn foo() {\n    bar();\n}\n\nfn bar() { // See how there is a blank line before\n    baz();\n}\n"})}),"\n",(0,s.jsxs)(n.p,{children:["The only exception is within trait definitions for function ",(0,s.jsx)(n.em,{children:"signatures"}),":"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-rs",children:"trait MyTrait {\n    // This is OK\n    fn foo();\n    fn bar();\n\n    // But this is **not** OK\n    fn baz() {\n        foo();\n    }\n    fn fuzz() { // See how there is no blank line above? This is **not** OK\n        baz();\n    }\n}\n"})}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"Markdown"}),":"]}),"\n",(0,s.jsx)(n.p,{children:"We write markdown documentation with exactly one sentence per line, like this:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-md",children:"We always have only one sentence per line.\nThis makes it easy to review changes as the diff shows exactly which sentences changed.\n"})}),"\n",(0,s.jsxs)(n.p,{children:["In particular we do ",(0,s.jsx)(n.strong,{children:"not"})," wrap sentences across multiple line in ",(0,s.jsx)(n.code,{children:".md"})," files (but we do in Rust comments!):"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-md",children:"We **never** wrap a sentence\nacross multiple lines.\n"})})]})}function d(e={}){const{wrapper:n}={...(0,i.R)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(h,{...e})}):h(e)}},8453:(e,n,t)=>{t.d(n,{R:()=>o,x:()=>a});var s=t(6540);const i={},r=s.createContext(i);function o(e){const n=s.useContext(r);return s.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function a(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:o(e.components),s.createElement(r.Provider,{value:n},e.children)}}}]);