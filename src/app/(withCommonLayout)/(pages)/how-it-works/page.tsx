import ThreeSteps from "@/components/modules/home/ThreeSteps";
import NSContainer from "@/components/ui/core/NSContainer";

const page = () => {
  return (
    <>
      <NSContainer className="space-y-24 mb-20">
        <section>
          <ThreeSteps />
        </section>
        <section>
          <div className="space-y-8">
            {/* Header */}
            <div>
              <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                How NobleSport Works
              </h1>
            </div>

            {/* Introduction */}
            <div className="space-y-4">
              <p className="text-gray-700 leading-relaxed">
                Welcome to NobleSport. By using our platform, you agree to the
                following process, which outlines how you can access and enjoy
                our services in a smooth and secure manner.
              </p>
            </div>

            {/* What data do we process section */}
            <div className="space-y-4">
              <h2 className="text-xl md:text-2xl font-bold text-gray-900 flex items-center">
                <span className="mr-2">→</span>Search for Venues
              </h2>

              <div className="space-y-4 ml-6">
                <p className="text-gray-700 leading-relaxed">
                  a. Users can browse through a curated collection of top-rated
                  sports venues available in their local area using the
                  NobleSport platform. b. NobleSport provides detailed listings
                  to help users find suitable venues based on location, sport
                  type, and ratings.
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
                Book Your Match
              </h2>

              <div className="space-y-4 ml-6">
                <p className="text-gray-700 leading-relaxed">
                  a. Once a venue is selected, users may choose their preferred
                  time slot and proceed to book directly through the platform.
                  b. All bookings are made via secure payment methods integrated
                  within the platform to ensure transaction safety.
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

            <div className="space-y-4">
              <h2 className="text-xl md:text-2xl font-bold text-gray-900 flex items-center">
                <span className="mr-2">→</span>
                Play and Enjoy
              </h2>

              <div className="space-y-4 ml-6">
                <p className="text-gray-700 leading-relaxed">
                  a. Upon successful booking, users are expected to arrive at
                  the selected venue on the scheduled date and time. b.
                  NobleSport encourages a respectful and enthusiastic
                  environment where users can enjoy playing and connecting with
                  fellow sports enthusiasts.
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
        </section>
      </NSContainer>
    </>
  );
};

export default page;
