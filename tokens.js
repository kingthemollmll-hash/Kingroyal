// status can be "online", "idle", "dnd", or "invisible" or "offline"
export default [
    {
        channelId: "1560701874972401790",
        serverId: "1554864043850866728",
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
