json.extract! conversation, :id, :user_id, :msg, :created_at, :updated_at
json.url conversation_url(conversation, format: :json)
