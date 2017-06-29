class Api::V1::LocalfirstsController < ApiController

  def index
    render json: {messages: "You have hit the API controller for static pages"}
  end
end
