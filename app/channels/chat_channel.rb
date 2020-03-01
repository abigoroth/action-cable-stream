class ChatChannel < ApplicationCable::Channel
    def subscribed
      stream_from "chat_#{params[:room]}"
    end
  
    def receive(data)
      Rails.logger.debug(data.inspect)
      ActionCable.server.broadcast("chat_#{params[:room]}", data)
    end
end