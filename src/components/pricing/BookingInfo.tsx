
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export const BookingInfo = () => {
  return (
    <Card>
      <CardHeader>
        <CardTitle className="text-xl">Booking Information</CardTitle>
      </CardHeader>
      <CardContent className="space-y-4">
        <p>
          A 30% booking fee is required to secure your date, with the balance due two weeks before the wedding.
        </p>
        <p>
          Travel fees may apply for destinations beyond 50km from our studio location.
        </p>
        <p>
          For availability and to discuss your specific requirements, please contact us:
        </p>
        <div className="pt-2">
          <a href="tel:+919632288815" className="text-primary hover:underline font-medium block">
            Phone: +91 96322 88815
          </a>
          <a href="mailto:candidcapture4@gmail.com" className="text-primary hover:underline font-medium">
            Email: candidcapture4@gmail.com
          </a>
        </div>
      </CardContent>
    </Card>
  );
};
