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
    content: 'Priyanshu Mundra is an AI and backend engineer who builds LLM applications, RAG pipelines, distributed backends and blockchain products. He has worked as a Software Development Engineer II, a CTO and a Senior Software Engineer, and has won hackathon awards for AI chatbots and Google Cloud apps.',
  },
  {
    id: 'cloudify',
    title: 'Cloudify, SDE II',
    source: 'about-and-experience.md',
    content: 'From December 2025 to June 2026 Priyanshu worked remotely as a Software Development Engineer II at Cloudify. He built AI applications on the OpenAI and Anthropic APIs, designed RAG pipelines, and cut AI costs by about 70 percent by self-hosting models.',
  },
  {
    id: 'polluxchain',
    title: 'PolluxChain, CTO',
    source: 'about-and-experience.md',
    content: 'From September 2024 to March 2026 Priyanshu was Chief Technology Officer at PolluxChain in Gurugram. He led engineering for the PolluxChain ecosystem and its Polink wallet, from architecture through release.',
  },
  {
    id: 'giichi',
    title: 'Giichi IT Solution, CTO and AI lead',
    source: 'about-and-experience.md',
    content: 'At Giichi IT Solution Priyanshu started in January 2024 as Team Lead and AI Engineer, building RAG and vector search systems and improving team efficiency by 30 percent. From July 2024 to March 2026 he was CTO, and the company generated over 1 million dollars in revenue.',
  },
  {
    id: 'zebraswap',
    title: 'ZebraSwap, DeFi Protocol Lead',
    source: 'about-and-experience.md',
    content: 'From August 2024 to May 2025 Priyanshu was DeFi Protocol Lead at ZebraSwap in Dubai, working on swap and liquidity mechanics and the backend services around a decentralised exchange.',
  },
  {
    id: 'plutope',
    title: 'PlutoPe, Senior Software Engineer',
    source: 'about-and-experience.md',
    content: 'From September 2022 to December 2023 Priyanshu was a Senior Software Engineer for AI and backend at PlutoPe. He built distributed backend services and AI-assisted features that kept 99.9 percent uptime.',
  },
  {
    id: 'skills',
    title: 'Skills',
    source: 'skills-and-education.md',
    content: 'Languages: Python, TypeScript, JavaScript and SQL. AI: LLMs, RAG, LangChain, AI agents, PyTorch and Pinecone, with Claude, Copilot, Cursor and the OpenAI and Anthropic SDKs. Backend: FastAPI, Node.js, microservices, REST and distributed systems. Infrastructure: Docker, Kubernetes, CI/CD, AWS and Git.',
  },
  {
    id: 'education',
    title: 'Education and programs',
    source: 'skills-and-education.md',
    content: 'Priyanshu holds a B.Tech in Computer Science and Engineering from Lovely Professional University with a CGPA of 8.0. He also completed the Frankfurt School DeFi Talent Program, Alchemy University blockchain development, Web3Champ and the HackClub RAIT SoC program.',
  },
  {
    id: 'project-chatbot',
    title: 'AI Customer-Support Chatbot',
    source: 'projects.md',
    content: 'A retrieval-augmented customer-support assistant that answers from a company\'s own documents with source references. It won Best Chatbot Hack at the Travelers hackathon. Stack: Python, LangChain, Pinecone and OpenAI.',
  },
  {
    id: 'project-gcloud',
    title: 'Google Cloud AI App',
    source: 'projects.md',
    content: 'An AI application built on Google Cloud with managed models and a serverless FastAPI backend deployed through CI/CD. It won Best Google Cloud Hack.',
  },
  {
    id: 'project-polink',
    title: 'PolluxChain and Polink Wallet',
    source: 'projects.md',
    content: 'Priyanshu led engineering for the PolluxChain blockchain ecosystem and its Polink wallet, with security-first wallet flows and chain tooling.',
  },
  {
    id: 'project-defi-nft',
    title: 'ZebraSwap DEX and NFT Minting Platform',
    source: 'projects.md',
    content: 'ZebraSwap is a decentralised exchange where Priyanshu led protocol and backend work. The NFT Minting Platform lets creators launch collections with Solidity contracts, wallet connection and a creator dashboard.',
  },
  {
    id: 'project-restaurant',
    title: 'Restaurant Management SaaS',
    source: 'projects.md',
    content: 'A multi-tenant restaurant management platform covering ordering, table management, billing and owner analytics, with real-time order flow between waiters, kitchen and billing.',
  },
  {
    id: 'contact',
    title: 'Contact',
    source: 'contact-links.md',
    content: 'Email: mundrapriyanshu15@gmail.com. GitHub: https://github.com/Spyder15. LinkedIn: https://www.linkedin.com/in/priyanshu-mundra.',
  },
]
