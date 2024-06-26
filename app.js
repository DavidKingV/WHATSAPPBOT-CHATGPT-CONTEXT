require('dotenv').config()

const {
    createBot,
    createProvider,
    createFlow,
    addKeyword,
    EVENTS,
  } = require("@bot-whatsapp/bot");
const QRPortalWeb = require('@bot-whatsapp/portal')
const BaileysProvider = require('@bot-whatsapp/provider/baileys')
const MockAdapter = require('@bot-whatsapp/database/mock')
const ChatGPTClass = require('./chatgpt.class')

const createBotGTP = async({provider, database}) => {
    return new ChatGPTClass(database, provider)
}
const main = async () => {
    const adapterDB = new MockAdapter()
    const adapterProvider = createProvider(BaileysProvider)

    createBotGTP({
        provider: adapterProvider,
        database: adapterDB,
    })

    QRPortalWeb()
}


main()
