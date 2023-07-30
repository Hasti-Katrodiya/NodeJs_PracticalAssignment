module.exports.chatbot = function chatbot(message) {

        //GOOGLE

        this.companyName = "GOOGLE";
        this.companySIze = "2000 Employees";
        this.companyLocation = "Surat, Gujarat, India";
        this.companyCEO = "Sundar Pichai";
        this.companychatbot = "BARD - AI";
       // this.companyCEO = "Sundar Pichai";

        message = message.toLowerCase();

        if (message.indexOf("hi") > -1 ||
                message.indexOf("hello") > -1 ||
                message.indexOf("hy") > -1) {
                return "Welcome!! How can I assist You ?";
        }
        else if (message.indexOf("your") > -1 &&
                message.indexOf("company") > -1 &&
                message.indexOf("name") > -1) {
                return "Our Company Name is " + this.companyName;
        }
        else if (message.indexOf("your") > -1 &&
                message.indexOf("company") > -1 &&
                message.indexOf("size") > -1) {
                return "Our Company Size is around " + this.companySIze;
        }
        else if (message.indexOf("your") > -1 ||
                message.indexOf("company") > -1 ||
                message.indexOf("location") > -1) {
                return "Our Company Location is " + this.companyLocation;
        }
        else if (message.indexOf("who") > -1 &&
                message.indexOf("ceo") > -1) {
                return "Our Company CEO is " + this.companyCEO;
        }
        else if (message.indexOf("chatbot") > -1) {
                return "Our Company chatbot is " + this.companychatbot;
        }
        else {
                return "OOPs I m not getting your question..!!";
        }
}