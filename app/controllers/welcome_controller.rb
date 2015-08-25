class WelcomeController < ApplicationController
  def index
    @homeland = 'Puerto Rico'
    @countries = ['Chile','Bolivia','Croatia']
    @travel_pics = ['chile.jpg', 'bolivia.jpg', 'croatia.jpg']
    
     @united_states = {"capital city" => "Washington, DC", 
                     "favorite city" => "New York, NY", 
                     "favorite state" => "Texas", 
                     "flag colors" => ["red", "white", "blue"]}
  end

  def about
    @color = params[:color]
    @size = params[:size].to_i
  end
  
  def contact
  end
end
