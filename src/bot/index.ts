import { Bot } from './bot'

let bot: Bot = new Bot()

bot.start()

process.on('uncaughtException', onError)
process.on('unhandledRejection', onError)
process.on('disconnect', onError)

function onError(error?: Error) {
  if (error) {
    console.error(error)
  }

  setTimeout(bot.start, 5000)
}