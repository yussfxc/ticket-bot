import Discord from "discord.js";
const { ButtonStyle, TextInputStyle } = Discord;

export default {
  PREFIX: "!",
  TOKEN: "MTE4NDQ3NDg1Mjc0OTQ5MjI1NQ.GtLgpv.OxKxSAYrQdei_ctqoeRcInmKWNn1IIPCGG7j14",
  ACTIVITY: { NAME: "gagsgag", TYPE: "PLAYING" },
  GUILD_ID: "1132384691878625433",
  TICKET: {
    CHANNEL: "1182267041751777300",
    CATEGORY: "1182267421902508052",
    ARCHIVE_CATEGORY: "1184476026282201088",
    MESSAGE: "Bilet oluşturmak için butona tıklayın!",
    STAFF_ROLES: [],
    BUTTONS: [
      {
        STYLE: ButtonStyle.Success,
        LABEL: "Blieti Onayla",
        EMOTE: "✅",
        ID: "successTicket",
        DISABLED: false,
      },
      {
        STYLE: ButtonStyle.Secondary,
        LABEL: "Bileti Arşivle",
        EMOTE: "🎫",
        ID: "archiveTicket",
        DISABLED: false,
      },
      {
        STYLE: ButtonStyle.Danger,
        LABEL: "Bileti Sil",
        EMOTE: "🎟️",
        ID: "deleteTicket",
        DISABLED: false,
      },
    ],
    QUESTIONS: [
      {
        ID: "name",
        LABEL: "Adınız",
        STYLE: TextInputStyle.Short,
        MIN_LENGTH: 0,
        MAX_LENGTH: 16,
        PLACE_HOLDER: "Lütfen kendi adınızı yazınız.",
        REQUIRED: true,
      },
      {
        ID: "age",
        LABEL: "Yaşınız",
        STYLE: TextInputStyle.Short,
        MIN_LENGTH: 0,
        MAX_LENGTH: 16,
        PLACE_HOLDER: "Lütfen kendi yaşınızı yazınız.",
        REQUIRED: true,
      },
    ],
  },
};
