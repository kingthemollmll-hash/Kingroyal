// status can be "online", "idle", "dnd", or "invisible" or "offline"
export default [
    {
        channelId: "1560700221753790586",
        serverId: "1355885728558481619",
        token: process.env.token1,
        selfDeaf: false,
        autoReconnect: {
            enabled: true,
            delay: 5, // ثواني
            maxRetries: 5,
        },
        presence: {
            status: "idle",
        },
        selfMute: true,
    },
];
