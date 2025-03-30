
import React from 'react';
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { WeddingPackage } from './WeddingPackage';
import { PreWeddingPackage } from './PreWeddingPackage';
import { CorporatePackage } from './CorporatePackage';

export const PricingTabs = () => {
  return (
    <Tabs defaultValue="wedding" className="w-full">
      <TabsList className="grid w-full grid-cols-3 max-w-md mx-auto mb-8">
        <TabsTrigger value="wedding">Wedding</TabsTrigger>
        <TabsTrigger value="pre-wedding">Pre-Wedding</TabsTrigger>
        <TabsTrigger value="corporate">Corporate</TabsTrigger>
      </TabsList>
      
      <TabsContent value="wedding" className="space-y-8">
        <WeddingPackage />
      </TabsContent>

      <TabsContent value="pre-wedding" className="space-y-8">
        <PreWeddingPackage />
      </TabsContent>

      <TabsContent value="corporate" className="space-y-8">
        <CorporatePackage />
      </TabsContent>
    </Tabs>
  );
};
