import NSContainer from "@/components/ui/core/NSContainer";

const TermsOfServicePage = () => {
  return (
    <>
      <NSContainer>
        <div className=" py-10">
          <div className="space-y-8">
            {/* Header */}
            <div>
              <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                Terms and Condition of
              </h1>
            </div>

            {/* Introduction */}
            <div className="space-y-4">
              <p className="text-gray-700 leading-relaxed">
                Welcome to [Your Company Name]. Before using our logo design
                service, please carefully review the following Terms and
                Conditions, as they govern the contractual relationship between
                you (the "Client") and [Your Company Name] (the "Service
                Provider"). By using our logo design service, you acknowledge
                that you have read, understood, and agreed to these Terms and
                Conditions in their entirety.
              </p>
            </div>

            {/* What data do we process section */}
            <div className="space-y-4">
              <h2 className="text-xl md:text-2xl font-bold text-gray-900 flex items-center">
                <span className="mr-2">→</span>
                What data do we process?
              </h2>

              <div className="space-y-4 ml-6">
                <p className="text-gray-700 leading-relaxed">
                  a. [Your Company Name] will provide custom logo design
                  services to the Client based on the specifications provided by
                  the Client.
                </p>

                <p className="text-gray-700 leading-relaxed">
                  b. The Service Provider will deliver the final logo design in
                  the agreed-upon format upon completion and full payment of the
                  service fee.
                </p>
              </div>
            </div>

            {/* What are your rights section */}
            <div className="space-y-4">
              <h2 className="text-xl md:text-2xl font-bold text-gray-900 flex items-center">
                <span className="mr-2">→</span>
                What are your rights?
              </h2>

              <div className="space-y-4 ml-6">
                <p className="text-gray-700 leading-relaxed">
                  a. The Client acknowledges that all rights, title, and
                  ownership of the final logo design will belong solely to the
                  Client after full payment has been received by the Service
                  Provider.
                </p>

                <p className="text-gray-700 leading-relaxed">
                  b. Final payment ensures that only the agreed design becomes
                  the client's property. Any previous ideas/concepts remain the
                  property of The Service Provider, unless any prior agreement
                  has been made.
                </p>

                <p className="text-gray-700 leading-relaxed">
                  c. The Service Provider reserves the right to showcase the
                  completed logo design in their portfolio or promotional
                  materials.
                </p>
              </div>
            </div>
          </div>
        </div>
      </NSContainer>
    </>
  );
};

export default TermsOfServicePage;
