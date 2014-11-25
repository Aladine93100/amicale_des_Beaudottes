class InquiriesController < ApplicationController
	def new
		@inquiry = Inquiry.new
	end

	def home
	end
		
	end

	def create

		# name = params[:cameraInput].original_filename
		# capture = File.join(Rails.root.join('tmp'), name)
		# File.open(capture, "wb") { |f| f.write(params[:cameraInput].read) }


		@inquiry = Inquiry.new(params[:inquiry])
		if @inquiry.deliver
			render :thank_you
		else
			render :new
		end
	end
end