import { GetServerSideProps } from "next";
import PropertyDetail from "@/components/property/PropertyDetail";
import BookingSection from "@/components/property/BookingSection";
import ReviewSection from "@/components/property/ReviewSection";
import { PropertyProps } from "@/interfaces/index";

// بيانات وهمية للمراجعات
const reviews = [
  {
    avatar: "/avatar1.png",
    name: "Ahmed Ali",
    rating: 5,
    comment: "مكان رائع ونظيف جدًا. أنصح به!",
  },
  {
    avatar: "/avatar2.png",
    name: "Sara Mohamed",
    rating: 4,
    comment: "إقامة مريحة والمضيف متعاون.",
  },
];

// صفحة التفاصيل
const PropertyPage = ({ property }: { property: PropertyProps }) => {
  return (
    <div className="container mx-auto px-4 py-8">
      <div className="flex flex-col lg:flex-row gap-8">
        {/* القسم الرئيسي */}
        <div className="flex-1">
          <PropertyDetail property={property} />
          <ReviewSection reviews={reviews} />
        </div>
        {/* قسم الحجز */}
        <div className="w-full lg:w-1/3 mt-8 lg:mt-0">
          <BookingSection price={property.price} />
        </div>
      </div>
    </div>
  );
};

export default PropertyPage;

// جلب بيانات العقار (مثال وهمي)
export const getServerSideProps: GetServerSideProps = async (context) => {
  // يمكنك هنا جلب البيانات من API أو قاعدة بيانات
  // مثال بيانات وهمية:
  const property = {
    id: context.params?.id,
    name: "شقة فاخرة في وسط المدينة",
    rating: 4.8,
    address: { city: "القاهرة", country: "مصر" },
    image: "/property.jpg",
    description: "شقة حديثة ومجهزة بالكامل في موقع مميز.",
    category: ["واي فاي", "مطبخ", "موقف سيارات"],
    price: 120,
  };

  return {
    props: { property },
  };
};