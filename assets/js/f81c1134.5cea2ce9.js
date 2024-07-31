"use strict";(self.webpackChunkwebsite_miralis=self.webpackChunkwebsite_miralis||[]).push([[130],{7735:e=>{e.exports=JSON.parse('{"archive":{"blogPosts":[{"id":"hello-world","metadata":{"permalink":"/blog/hello-world","source":"@site/blog/2024-07-01-hello-world.md","title":"Hello, world!","description":"I am glad to announce that today we open-sourced Miralis, a project I have been working on for the last six months together with some awesome people!","date":"2024-07-01T00:00:00.000Z","tags":[{"inline":false,"label":"News","permalink":"/blog/tags/news","description":"News and updates about Miralis"}],"readingTime":4.29,"hasTruncateMarker":false,"authors":[{"name":"Charly Castes","url":"https://charlycst.github.io","imageURL":"https://github.com/charlycst.png","key":"charlycst"}],"frontMatter":{"slug":"hello-world","title":"Hello, world!","authors":["charlycst"],"tags":["news"]},"unlisted":false,"lastUpdatedAt":1721252003000},"content":"I am glad to announce that today we open-sourced [Miralis](https://github.com/charlycst/miralis), a project I have been working on for the last six months together with some awesome people!\\nWe are still in the very early days, but I think we already built something quite interesting, and I am looking forward to continue developing Miralis in the open.\\n\\n## The Achilles\' heel of the compute infrastructure\\n\\nThe Miralis project started from the realisation that modern computers are built on top of two incompatible assumptions at the lowest level of the stack: the computer\'s firmware.\\nOn one hand the firmware\'s responsibility is to manage and configure the hardware, it is often proprietary and presented as an opaque binary blob that needs to be installed on all machines.\\nOn the other hand, the firmware recently gained a new role as the entity that enforces machine-wide security policies.\\nThis is especially true with the rise of confidential computing (e.g. [ARM CCA](https://www.arm.com/architecture/security-features/arm-confidential-compute-architecture) or RISC-V\'s [Keystone](https://keystone-enclave.org/)), where the responsibility to provide isolation is shifted from the OS/hypervisor to the firmware.\\n\\nThe two roles of the firmware, managing the hardware and enforcing security policies, are fundamentally in tension with each other, or at least will be until hardware manufacturers agree to release the source of their firmware.\\nUntil then, the security of the world\'s compute infrastructure has no choice but to rely on opaque binary blobs.\\n\\nWith Miralis we would like to propose something different.\\nWe acknowledge the need for proprietary firmware but we do not want to rely on it for security.\\nRather, we propose to deprivilege proprietary firmware and to enforce strong isolation policies to decouple the security of the rest of the computing stack from the correctness (and cooperation) of opaque firmware.\\nWe understand that requiring firmware changes would be disruptive, therefore we propose to execute unmodified firmware by virtualising and sandboxing the lowest privilege level on the machine.\\n\\n## Miralis in a nutshell\\n\\nIn short Miralis is RISC-V security monitor that virtualises M-mode software.\\nBy \\"virtualise M-mode software\\" I mean that Miralis can run deprivileged M-mode software transparently, like it would execute on a bare metal RISC-V machine.\\nAs a quick summary for people new to RISC-V, the RISC-V architecture exposes up to three privilege modes (ignoring the hypervisor extension): user mode (U-mode, for applications), supervisor mode (S-mode, for the OS kernel), and machine mode (M-mode, for the firmware).\\n\\n```\\n        \u250c\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2510\\nU-mode  \u2502   User App   \u2502\\n        \u251c\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2524\\nS-mode  \u2502      OS      \u2502\\n        \u251c\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2524\\nM-mode  \u2502   Firmware   \u2502\\n        \u2514\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2518\\n```\\n\\nWith Miralis we make it possible to execute firmware in a virtual M-mode.\\nIn practice we run the firmware in U-mode under the control of Miralis.\\nThis makes it possible to sandbox M-mode software, which how we protect the rest of the stack from untrusted firmware, while running the OS natively at full speed.\\n\\n```\\n        \u250c\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2510 \u250c\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2510\\nU-mode  \u2502   User App   \u2502 \u2502  Firmware  \u2502\\n        \u251c\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2524 \u2514\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2518\\nS-mode  \u2502      OS      \u2502\\n        \u251c\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2534\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2510\\nM-mode  \u2502           Miralis           \u2502\\n        \u2514\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2518\\n```\\n\\nThe firmware is virtualised using a classical trap & emulate approach: most of the instructions are executed natively by the processor, but privileged instructions trap to Miralis which will emulate them in software (while enforcing security invariants).\\n\\n## Current status\\n\\nThe project started six months ago, slowly at first but we are now making progress at a steady pace.\\nThe initial focus was on the software architecture, to make the project modular and as future proof as we could anticipate.\\nThe main components of Miralis are in place.\\nThis include for instance the instruction decoder, instruction emulation, virtual contexts, and context switching.\\nThe code base is modular over the platform (to support multiple boards and SoCs in the future) and the architecture (to support, e.g., running Miralis in user-space for unit and integration testing).\\n\\nWe do not yet support a wide variety of workloads, but we do have a solid foundation.\\nMiralis can already boot an unmodified [OpenSBI](https://github.com/riscv-software-src/opensbi) in virtual M-mode (that is physical U-mode) with a simple payload. We also experimented with other firmware, such as [Zephyr](https://zephyrproject.org/) for which we have early support.\\n\\nI would like use this opportunity to thank all the people who contributed to the Miralis project, especially my awesome colleague Neelu who helped design Miralis, Abel who achieved a tremendous amount of work over the last semester and actually took Miralis to the place it is today, and Fran\xe7ois who recently joined the effort and made some great contributions.\\n\\n## What is next\\n\\nThis summer we will focus on delivering on the Miralis promises, in particular by focusing on full Linux support and porting Miralis to physical boards in addition to our current QEMU support.\\nWe will also explore new approaches to deliver best-in-class security, in particular through an innovative take a formally verifying crucial pieces of Miralis, a subject I would like to discuss more in the near future.\\n\\nOver the summer Sofia and No\xe9 will be joining forces, I\'m sure we will be able to achieve a lot by working together and I am looking forward to see how far we can go with Miralis, with the ultimate goal to help secure the foundations of the world\'s compute infrastructure."}]}}')}}]);