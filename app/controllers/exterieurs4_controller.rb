class Exterieurs4Controller < ApplicationController
  def new
  	voie9 = params[:voie9]
		if voie9 == 'Francis Garnier'
			@numeros = [1,2,3,4,6,8]
		elsif voie9 == 'Pérouse'
			@numeros = [2,4,6]
		elsif voie9 == 'Bougainville'
			@numeros = [1,2,3,4,5,6,7,8,9,10,11,12,13]
		elsif voie9 == 'Jacques Cartier'
			@numeros = [1,2]
     	elsif voie9 == 'Champlain'
     		@numeros = [1,3,5,7]
     	end
			
		render inline: '<%= select_tag "numero", options_for_select(@numeros) %>'
  end
end
