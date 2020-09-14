class AddressBooksController < ApplicationController
  def create
    return unless request.xhr?

    address_book = AddressBook.new(address_book_params)
    address_book.save!
    head :created
  end

  def address_book_params
    Rails.logger.info "***********address_book_params= #{params}********"
    params.require(:address_book).permit(:first_name, :last_name, :email)
  end
end
