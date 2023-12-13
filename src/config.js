import Discord from "discord.js";
const { ButtonStyle, TextInputStyle } = Discord;

export default {
  PREFIX: "!",
  TOKEN: "token",
  ACTIVITY: { NAME: "BİŞİ BİŞİ OYNUYOR", TYPE: "PLAYING" },
  GUILD_ID: "SUNUCU İD",
  TICKET: {
    CHANNEL: "KANAL İD",
    CATEGORY: "KATEGORİ İD",
    ARCHIVE_CATEGORY: "ARŞİV KATEGORİ İD",
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
