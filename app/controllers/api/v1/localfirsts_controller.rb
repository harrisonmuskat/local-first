class Api::V1::LocalfirstsController < ApiController

  def index
    render json: @localFirst
  end
end
