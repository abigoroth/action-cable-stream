import consumer from "./consumer"

const chatChannel = consumer.subscriptions.create({ channel: "ChatChannel", room: "Best Room" }, {
  received(data) {
    console.log(data)
    this.appendLine(data)
  },
  connected() {
    this.send({ email: "tipah@manrimo.com :", msg: "Lets GONEEE" })
  },
  appendLine(data) {
    const html = this.createLine(data)
    const element = document.querySelector("[data-chat-room='Best Room']")
    $("tbody").append(html)
  },

  createLine(data) {
    return `
      <tr><td>${data["email"]}</td><td>${data["msg"]}</td><td colspan=3></td></tr>
    `
  }
})

// chatChannel.send({ sent_by: "Paul", body: "This is a cool chat app." })