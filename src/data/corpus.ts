export type CorpusChunk = {
  id: string
  title: string
  source: string
  content: string
}

export const corpus: readonly CorpusChunk[] = [
  {
    id: 'profile',
    title: 'Profile',
    source: 'about-and-experience.md',
    content: 'Priyanshu Mundra is an AI-first Backend and AI Engineer with 3+ years of experience building scalable backend systems and production LLM applications. He designs and ships RAG pipelines, AI agents and LLM-powered features, and uses Claude, GitHub Copilot and Cursor daily to speed up delivery, code review and testing. He is based in Gurugram, India.',
  },
  {
    id: 'cloudify',
    title: 'Cloudify, SDE II',
    source: 'about-and-experience.md',
    content: 'From December 2025 to June 2026 Priyanshu was a Software Development Engineer II at Cloudify. He built AI client applications with the OpenAI and Anthropic SDKs, designed RAG-style retrieval and prompt pipelines grounded on client data, and cut operational costs by 70 percent by migrating workloads to self-hosted infrastructure and model serving.',
  },
  {
    id: 'giichi',
    title: 'Giichi IT Solution, Team Lead and AI Engineer',
    source: 'about-and-experience.md',
    content: 'From January 2024 to December 2025 Priyanshu was Team Lead and AI Engineer at Giichi IT Solution. He led architecture and delivery of enterprise cloud applications with LLM features, RAG retrieval and vector search, built event-driven embedding pipelines that raised processing efficiency by 30 percent, refactored Python and Node.js microservices for AI workloads, and rolled out AI-assisted development across the team.',
  },
  {
    id: 'plutope',
    title: 'PlutoPe, Senior Software Engineer',
    source: 'about-and-experience.md',
    content: 'From September 2022 to December 2023 Priyanshu was a Senior Software Engineer for AI and backend at PlutoPe. He sustained 99.9 percent uptime on live transaction pipelines, built model inference endpoints and self-healing background workers for AI features, authored OpenAPI schemas and mentored junior engineers on AI integrations.',
  },
  {
    id: 'earlier',
    title: 'Earlier experience',
    source: 'about-and-experience.md',
    content: 'Earlier roles: OranetAI software engineer (Nov 2022 to Aug 2023) building a restaurant-management SaaS from scratch; a self-employed consultant (Dec 2022 to Mar 2025) advising startups on full-stack, mobile and cloud; Fiverr Solidity developer (Oct 2022 to Oct 2023) delivering ERC-20, ERC-721 and ERC-1155 contracts; onchain.vc blockchain developer (Feb 2022 to Aug 2023) in Solidity and Rust; NoBroker React intern (Feb to Apr 2022) with an autocomplete API at about 3 ms latency on the ELK stack; and a Goldman Sachs engineering intern (Nov to Dec 2021) who reviewed password-hashing practices.',
  },
  {
    id: 'skills',
    title: 'Skills',
    source: 'skills-and-education.md',
    content: 'Languages: Python (FastAPI, Flask, Asyncio), JavaScript and TypeScript (Node.js, NestJS, React) and SQL. AI and ML: generative AI, LLMs, RAG pipelines, prompt engineering, AI agents, LangChain, LlamaIndex, Hugging Face, PyTorch, and vector databases Pinecone and ChromaDB. AI tools: Claude, GitHub Copilot, Cursor and the OpenAI and Anthropic SDKs. Backend: REST APIs, microservices, distributed systems and real-time data pipelines. DevOps: Docker, Kubernetes, CI/CD, AWS and observability.',
  },
  {
    id: 'education',
    title: 'Education and certifications',
    source: 'skills-and-education.md',
    content: 'Priyanshu holds a B.Tech in Computer Science and Engineering from Lovely Professional University with a CGPA of 8.0. Certifications: Frankfurt School DeFi Talent Program, Alchemy University blockchain development, Web3Champ and HackClub RAIT SoC. Languages spoken: English (full professional) and Hindi (native).',
  },
  {
    id: 'achievements',
    title: 'Hackathons and awards',
    source: 'achievements.md',
    content: 'Priyanshu won 1st place at BlueSprint, Best Chatbot Hack sponsored by Travelers, and Best Google Cloud Hack, and finished in the top 10 teams at a national-level hackathon.',
  },
  {
    id: 'project-chatbot',
    title: 'AI Customer-Support Chatbot',
    source: 'projects.md',
    content: 'A conversational LLM assistant with intent handling and context-aware responses, with an NLP and LLM backend wired to a React frontend for real-time chat. It won Best Chatbot Hack sponsored by Travelers.',
  },
  {
    id: 'project-gcloud',
    title: 'Google Cloud AI App',
    source: 'projects.md',
    content: 'A cloud-native application built on Google Cloud AI and ML services that won Best Google Cloud Hack for AI-driven functionality and clean cloud architecture.',
  },
  {
    id: 'project-polink',
    title: 'PolluxChain and Polink Wallet',
    source: 'projects.md',
    content: 'Priyanshu architected PolluxChain, a Layer 1 blockchain, and built the backend for Polink, its native crypto wallet, with Redis caching and job queues, secure wallet APIs and Solidity smart contracts.',
  },
  {
    id: 'project-defi-nft',
    title: 'ZebraSwap DEX and NFT Minting Platform',
    source: 'projects.md',
    content: 'ZebraSwap is a DeFi DEX where Priyanshu built automated market maker logic, liquidity pools, yield-farming strategies and cross-chain integrations. The NFT Minting Platform uses ERC-721 and ERC-1155 contracts with OpenZeppelin and Beacon Proxy, a wallet-connect minting flow and a Web3 frontend tested with Truffle and Hardhat.',
  },
  {
    id: 'project-restaurant',
    title: 'Restaurant Management SaaS',
    source: 'projects.md',
    content: 'A full-stack online and offline POS and operations platform for restaurants with offline-first sync and a single management dashboard, built from scratch in Node.js, React and SQL at OranetAI.',
  },
  {
    id: 'project-public',
    title: 'Open-source projects',
    source: 'projects.md',
    content: 'Public projects on GitHub (Spyder15): Crypto Flow Radar, a Binance perpetuals scanner live on GitHub Pages; Nexus Graph, an expert and collaboration finder on a graph database; NFT Certificate, a live app that issues certificates as NFTs; CRONIX Staking, a Web3 staking dApp; JARVIS, a multi-LLM desktop assistant built with Electron and Python; a payment withdrawal module in Node.js and TypeScript; a Decentralized Escrow smart contract; an Online IDE; and a ChatGPT Chrome extension.',
  },
  {
    id: 'availability',
    title: 'Availability and focus',
    source: 'about-and-experience.md',
    content: 'Priyanshu is open to backend, AI and blockchain engineering opportunities and is based in Gurugram, India. He owns features end to end, from architecture and cost control to leading a distributed team.',
  },
  {
    id: 'contact',
    title: 'Contact',
    source: 'contact-links.md',
    content: 'Email: mundrapriyanshu15@gmail.com. GitHub: https://github.com/Spyder15. LinkedIn: https://www.linkedin.com/in/priyanshu-mundra.',
  },
]
