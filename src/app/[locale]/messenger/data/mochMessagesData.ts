/* eslint-disable @typescript-eslint/no-empty-object-type */

type MessageType = 'text' | 'file' | 'offer';

type TextOrFileContent = string;

interface OfferContent {
    workScope: string;
    experienceLevel: string;
    budget: string;
}

export interface messagesData {
    id: number;
    sender: string;
    time: string;
    content: TextOrFileContent | OfferContent;
    type: MessageType;
}

const messagesData: messagesData[] = [
    // First 15 text-only messages (>= 50 characters)
    {
      id: 101,
      sender: "Eleni C",
      time: "12:23 PM",
      content: "Hello Maria, just checking in to see how things are going.",
      type: "text"
    },
    {
      id: 102,
      sender: "Maria T",
      time: "02:25 PM",
      content: "I'm doing well, thanks! How about we review the proposal today?",
      type: "text"
    },
    {
      id: 104,
      sender: "Maria T",
      time: "04:00 PM",
      content: "Thanks for sharing the document. I'll review it in detail shortly.",
      type: "text"
    },
    {
      id: 106,
      sender: "Maria T",
      time: "06:00 PM",
      content: "Sounds good to me! Let's go over the scope once again.",
      type: "text"
    },
    {
      id: 108,
      sender: "Maria T",
      time: "06:30 PM",
      content: "What do you think about adjusting the delivery timeline?",
      type: "text"
    },
    {
      id: 111,
      sender: "Eleni C",
      time: "07:15 PM",
      content: "Let's move forward with the first phase of the project plan.",
      type: "text"
    },
    {
      id: 112,
      sender: "Maria T",
      time: "07:30 PM",
      content: "Great! I'll get the team started and keep you posted with updates.",
      type: "text"
    },
    {
      id: 115,
      sender: "Eleni C",
      time: "08:15 PM",
      content: "Can we add a new feature for better user onboarding experience?",
      type: "text"
    },
    {
      id: 116,
      sender: "Maria T",
      time: "08:30 PM",
      content: "Sure, what's the idea? We can brainstorm implementation options.",
      type: "text"
    },
    {
      id: 119,
      sender: "Eleni C",
      time: "09:15 PM",
      content: "Please review the updates and let me know your feedback today.",
      type: "text"
    },
    {
      id: 121,
      sender: "Eleni C",
      time: "09:45 PM",
      content: "This looks perfect! You've done a great job with this module.",
      type: "text"
    },
    {
      id: 122,
      sender: "Maria T",
      time: "10:00 PM",
      content: "Any changes needed before we finalize the current milestone?",
      type: "text"
    },
    {
      id: 125,
      sender: "Eleni C",
      time: "10:45 PM",
      content: "Thank you! I really appreciate your effort and quick turnaround.",
      type: "text"
    },
    {
      id: 126,
      sender: "Maria T",
      time: "11:00 PM",
      content: "You're welcome. Happy to help anytime you need support again.",
      type: "text"
    },
    {
      id: 130,
      sender: "Eleni C",
      time: "11:45 PM",
      content: "Make sure to update the documentation with the new endpoints too.",
      type: "text"
    },
  
    // Last 10 - Mixed (text, file, offer)
    {
      id: 131,
      sender: "Maria T",
      time: "12:00 AM",
      content: "Let’s add this to the sprint backlog for next week's planning.",
      type: "text"
    },
    {
      id: 132,
      sender: "Eleni C",
      time: "12:15 AM",
      content: "project-overview.pdf",
      type: "file"
    },
    {
      id: 133,
      sender: "Eleni C",
      time: "12:30 AM",
      content: {
        workScope: "1-3 months",
        experienceLevel: "Intermediate",
        budget: "$1000"
      },
      type: "offer"
    },
    {
      id: 134,
      sender: "Maria T",
      time: "12:45 AM",
      content: "Final note: please test all scenarios before deployment.",
      type: "text"
    },
    {
      id: 135,
      sender: "Eleni C",
      time: "01:00 AM",
      content: "roadmap-2025.pdf",
      type: "file"
    },
    {
      id: 136,
      sender: "Maria T",
      time: "01:15 AM",
      content: {
        workScope: "3-6 months",
        experienceLevel: "Advanced",
        budget: "$2500"
      },
      type: "offer"
    },
    {
      id: 137,
      sender: "Eleni C",
      time: "01:30 AM",
      content: "Noted. I'll update the staging server by EOD.",
      type: "text"
    },
    {
      id: 138,
      sender: "Maria T",
      time: "01:45 AM",
      content: "release-plan.pdf",
      type: "file"
    },
    {
      id: 139,
      sender: "Eleni C",
      time: "02:00 AM",
      content: {
        workScope: "Ongoing",
        experienceLevel: "Expert",
        budget: "$4000"
      },
      type: "offer"
    },
    {
      id: 140,
      sender: "Maria T",
      time: "02:15 AM",
      content: "Let's do a quick sync tomorrow to align on next steps.",
      type: "text"
    }
  ];
  


export default messagesData;
