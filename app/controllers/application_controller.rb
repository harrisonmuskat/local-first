class ApplicationController < ActionController::Base
  protect_from_forgery with: :null_session

  before_action :configure_permitted_parameters, if: :devise_controller?
  before_action :set_localfirst_parameters

  # def set_localfirst_parameters
  #   @state = "Mass"
  #   @towns= "Boston"
  # end

end
