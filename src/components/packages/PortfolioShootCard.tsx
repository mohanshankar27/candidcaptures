
import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import PackageFeature from './PackageFeature';

const PortfolioShootCard: React.FC = () => {
  return (
    <Card className="border-primary/20 hover:shadow-lg transition-all duration-300">
      <CardHeader className="bg-gradient-to-r from-primary/15 to-primary/5 pb-2">
        <CardTitle className="text-primary text-lg">Portfolio Shoot</CardTitle>
        <CardDescription className="text-slate-600 pt-1">Professional portfolio</CardDescription>
        <div className="mt-4 mb-1">
          <span className="text-2xl font-light text-[#ea384c]">₹66,067</span>
          <span className="text-sm text-slate-500">+GST</span>
        </div>
      </CardHeader>
      <CardContent className="pt-6">
        <ul className="space-y-3">
          <PackageFeature text="Location: Studio & outdoor" />
          <PackageFeature text="Duration: ~ 1-2 days +" />
          <PackageFeature text="40+ photographs" />
          <PackageFeature text="Basic(20), Advanced Retouch(20)" />
          <PackageFeature text="4 looks or more" />
          <PackageFeature text="Complete Planning Support" />
          <PackageFeature text="Intro Video: Yes, personalised" />
          <PackageFeature text="Look Book/Hard Prints: Yes" />
          <PackageFeature text="MUA/H: additional" />
          <PackageFeature text="Stylist/Art Direction: Yes" />
          <PackageFeature text="Extras: location charges, website" />
        </ul>
        <div className="mt-4 pt-4 border-t border-slate-100">
          <Button className="w-full bg-[#ea384c] hover:bg-[#ea384c]/90">
            Call +91.9632288815
          </Button>
        </div>
      </CardContent>
    </Card>
  );
};

export default PortfolioShootCard;
