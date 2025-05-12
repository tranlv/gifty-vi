const config = {
    domain: "gifty.app",
    title: "Join the Waitlist | Gifty",
    description: "Send and receive magical digital gifts. Unlock surprises with riddles, timers, lucky spins, and scavenger hunts. Gifty is coming soon – join the waitlist!",
    subscribeForm: "https://dashboard.mailerlite.com/forms/631411/101265918935434456/share",

    socials: {
        twitter: "https://x.com/giftyapp", // Update with your real handle
    },

    contents: {
        title: "Discover a New Way to Gift with Gifty",
        markOfTitle: "Gifty",
        description: `Step into a world of delightful surprises with Gifty. Send and receive
personalized digital gifts unlocked by riddles, locations, timers, and lucky spins —
or hide them in the real world for others to discover.`,

        about: [
            {
                id: 1,
                emoji: "🎯",
                title: "Scavenger Hunt Mode",
                description: "Public gifts can be hidden on a map. Let friends and strangers explore and unlock them in real locations — like Pokémon GO, but with gifts!"
            },
            {
                id: 2,
                emoji: "🔐",
                title: "Private Gifting",
                description: "Send meaningful, locked gifts just for your friends. Only they can open it with the right answer, at the right time, or in the right place."
            },
            {
                id: 3,
                emoji: "🎁",
                title: "Interactive Gift Challenges",
                description: "Wrap gifts inside experiences — riddles, countdowns, GPS tasks, or lucky draws — making every gift personal and memorable."
            }
        ],

        howWorks: [
            {
                title: "Create and hide your gift",
                description: "Choose a gift (image, video, message...) and wrap it with your preferred unlock method."
            },
            {
                title: "Choose public or private",
                description: "Send directly to a friend or drop it publicly for anyone to find on a real-world scavenger hunt."
            },
            {
                title: "Let the challenge begin",
                description: "Friends solve riddles, wait for countdowns, spin wheels, or visit places to unlock your surprise."
            },
            {
                title: "Unlock the joy",
                description: "They'll receive the gift only when they complete your challenge — a moment they’ll remember."
            },
            {
                title: "Track your magic",
                description: "Monitor gift views, unlock attempts, and engagement right from your dashboard."
            },
        ],

        price: {
            description: "Gifty is free to start! Upgrade for advanced unlock types, branding options, analytics, and more.",
            price: "$5/month",

            advantages: [
                'Send up to 3 gifts/week for free.',
                'Access public map-based scavenger gifting.',
                'Unlock premium riddles and timer flows.',
                'Add branding, themes, and custom cover images.',
                'Track who unlocked what, when, and how.'
            ]
        },

        faq: [
            {
                question: "What is Gifty?",
                answer: "Gifty is a digital gifting app where gifts are unlocked through interactive challenges like riddles, timers, GPS locations, or lucky wheels."
            },
            {
                question: "Can I send private gifts?",
                answer: "Yes! You can send a personal gift directly to a friend with a private unlock link."
            },
            {
                question: "What is the scavenger hunt feature?",
                answer: "You can place a gift on the public map and challenge users to find and unlock it in real life — like a gift-based treasure hunt!"
            },
            {
                question: "How do recipients unlock gifts?",
                answer: "They solve a riddle, wait for a timer, arrive at a location, or spin a lucky wheel — depending on what you choose."
            },
            {
                question: "What can I send?",
                answer: "Send images, videos, links, or heartfelt text — anything meaningful, wrapped in a game-like experience."
            },
            {
                question: "Do I need to install an app?",
                answer: "Nope. Gifty works in any modern browser, no installation required."
            },
            {
                question: "Is my gift private?",
                answer: "Gifts are private when they’re sent directly from someone to you. Only the recipient with the unique unlock link can access and open it. Public gifts, like scavenger hunt drops, are discoverable by anyone."
            },
            {
                question: "How do I get help?",
                answer: "Email us at tranlyvu.official@gmail.com — we’re here to help!"
            }
        ]
    }
}

export default config;