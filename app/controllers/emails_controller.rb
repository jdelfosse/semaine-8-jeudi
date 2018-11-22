class EmailsController < ApplicationController
  def index
    @emails = Email.all
  end

  def show
    @email = Email.find(params[:id])
    respond_to do |format|
       format.html
       format.js
    end
  end

  def destroy
    puts "test"
    @email = Email.find(params[:id])
    @email = Email.destroy(params[:id])
    respond_to do |format|
       format.html { redirect_to root_url}
       format.js
    end
  end
end
