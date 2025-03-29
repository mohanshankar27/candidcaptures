
import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import PackageFeature from './PackageFeature';

const TestShootCard: React.FC = () => {
  return (
    <Card className="border-primary/20 hover:shadow-lg transition-all duration-300">
      <CardHeader className="bg-gradient-to-r from-primary/10 to-primary/5 pb-2">
        <CardTitle className="text-primary text-lg">Test Shoot</CardTitle>
        <CardDescription className="text-slate-600 pt-1">Perfect for beginners</CardDescription>
        <div className="mt-4 mb-1">
          <span className="text-2xl font-light text-[#ea384c]">₹16,067</span>
          <span className="text-sm text-slate-500">+GST</span>
        </div>
      </CardHeader>
      <CardContent className="pt-6">
        <ul className="space-y-3">
          <PackageFeature text="Location: Studio Only" />
          <PackageFeature text="Duration: ~4hrs +" />
          <PackageFeature text="25+ photographs" />
          <PackageFeature text="Basic(20), Advanced Retouch(5)" />
          <PackageFeature text="Up to 4 looks" />
          <PackageFeature text="Planning: Yes, test shoot followed by planning" />
          <PackageFeature text="Intro Video: Yes, Basic (45 sec)" />
          <PackageFeature text="MUA/H: additional" />
          <PackageFeature text="Stylist: Optional" />
        </ul>
        <div className="mt-4 pt-4 border-t border-slate-100">
          <Button className="w-full bg-[#ea384c] hover:bg-[#ea384c]/90">
            Book Appointment
          </Button>
        </div>
      </CardContent>
    </Card>
  );
};

export default TestShootCard;
