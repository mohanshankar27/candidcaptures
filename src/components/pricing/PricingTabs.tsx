
import React from 'react';
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { WeddingPackage } from './WeddingPackage';
import { PreWeddingPackage } from './PreWeddingPackage';
import { CorporatePackage } from './CorporatePackage';
import MaternityPackage from './MaternityPackage';

export const PricingTabs = () => {
  return (
    <Tabs defaultValue="wedding" className="w-full">
      <div className="text-center mb-10">
        <h1 className="text-4xl font-bold text-slate-800 mb-4">Photography Pricing</h1>
        <p className="text-lg text-slate-600 max-w-3xl mx-auto">
          Professional photography packages tailored to capture your special moments with exceptional quality and creativity.
        </p>
      </div>
      
      <TabsList className="grid w-full grid-cols-4 max-w-lg mx-auto mb-8">
        <TabsTrigger value="wedding">Wedding</TabsTrigger>
        <TabsTrigger value="pre-wedding">Pre-Wedding</TabsTrigger>
        <TabsTrigger value="maternity">Maternity</TabsTrigger>
        <TabsTrigger value="corporate">Corporate</TabsTrigger>
      </TabsList>
      
      <TabsContent value="wedding" className="space-y-8">
        <WeddingPackage />
      </TabsContent>

      <TabsContent value="pre-wedding" className="space-y-8">
        <PreWeddingPackage />
      </TabsContent>

      <TabsContent value="maternity" className="space-y-8">
        <MaternityPackage />
      </TabsContent>

      <TabsContent value="corporate" className="space-y-8">
        <CorporatePackage />
      </TabsContent>
    </Tabs>
  );
};
