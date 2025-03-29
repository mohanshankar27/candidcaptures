
import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import PackageFeature from './PackageFeature';

const PolaroidsCard: React.FC = () => {
  return (
    <Card className="border-primary/20 shadow-md hover:shadow-xl relative transition-all duration-300">
      <div className="absolute -top-4 right-0 left-0 mx-auto w-fit px-3 py-1 bg-[#ea384c] text-white text-sm rounded-full">
        Most Popular
      </div>
      <CardHeader className="bg-gradient-to-r from-primary/20 to-primary/10 pb-2">
        <CardTitle className="text-primary text-lg">Get Started with Polaroids</CardTitle>
        <CardDescription className="text-slate-600 pt-1">Quick agency submissions</CardDescription>
        <div className="mt-4 mb-1">
          <div className="flex items-center gap-2">
            <span className="text-lg font-light text-slate-400 line-through">₹6,067</span>
            <span className="text-2xl font-light text-[#ea384c]">₹4,237</span>
            <span className="text-sm text-slate-500">+GST</span>
          </div>
        </div>
      </CardHeader>
      <CardContent className="pt-6">
        <ul className="space-y-3">
          <PackageFeature text="Location: Studio Only" />
          <PackageFeature text="Duration: ~30mins" />
          <PackageFeature text="12 polaroid images" />
          <PackageFeature text="Retouching: Basic" />
          <PackageFeature text="Changes/Looks: 1 (no changes allowed)" />
          <PackageFeature text="Planning: Basic" />
          <PackageFeature text="Intro Video: Extra @995+GST" />
          <PackageFeature text="MUA/H: optional" />
        </ul>
        <div className="mt-4 pt-4 border-t border-slate-100">
          <Button className="w-full bg-[#ea384c] hover:bg-[#ea384c]/90">
            Book Online
          </Button>
        </div>
      </CardContent>
    </Card>
  );
};

export default PolaroidsCard;
