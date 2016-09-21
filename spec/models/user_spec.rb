require 'rails_helper'

describe User do 
  describe "email" do 
    let(:user) {
      User.create!(email: "foo@example.com",
                   password: "qwertyuiop",
                   password_confirmation: "qwertyuiop")
    }
    it "absolutely prevents invalid email addresses" do
      expect {
        user.update_attribute(:email, "foo@bar.com",)
      }. to violate_check_constraint(:email_must_be_company_email)
    end
  end
end
