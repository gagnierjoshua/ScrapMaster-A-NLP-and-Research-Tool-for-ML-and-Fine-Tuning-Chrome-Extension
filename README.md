## ScrapMaster

This project was bread from the desire for effective ways to gather, clean, and tokenize text rapidly to meet the constraints of training an LLM to make a query bot. 

Going through the process myself, and finding it overtly time-consuming to remove specific parts of the text, I found there is a need for a tool that can easily scrape text from a webpage, clean it, and reduce it to a reasonable number of tokens. 

I also, can imagine that this tool would be very useful for others in gathering data to train an AI query bot. 

I decided to build out a Google Chrome extension because of how flexible they are, it is where you will be gathering data in real-time not having to jump between a specific website and a tab, desktop application, coding environment, etc. keeping the focus on the gathering of data in live time.

There is a desire for flexibility as well, where I could highlight very key points of text that are hyper-specific and tokenize them into a .csv on the spot how I want, or I can just slap entire web pages in at once. I can also compare similar texts that have the same 'content' but may have very different numbers of tokens very quickly choosing what to save or delete. 

![Product Design- ScrapMaster](https://github.com/gagnierjoshua/Chrome-Extension-w--API/assets/134977378/73fecab3-cdc0-4815-ac7b-47e69029b8b3)
