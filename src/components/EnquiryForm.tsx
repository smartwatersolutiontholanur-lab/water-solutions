const EnquiryForm = () => {
  return (
    <section id="enquiry" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-foreground">
            Send Us An Enquiry
          </h2>
          <div className="h-1 w-24 bg-primary mx-auto mb-6" />
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Fill out the form below and we'll get back to you as soon as possible
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="bg-card border border-border rounded-lg shadow-lg overflow-hidden">
            <iframe
              src="https://form.jotform.com/252914257700051"
              style={{
                width: "100%",
                height: "800px",
                border: "none",
              }}
              title="Enquiry Form"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default EnquiryForm;
