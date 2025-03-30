
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Check, X } from 'lucide-react';

export interface FeatureRow {
  feature: string;
  silver: React.ReactNode | string;
  gold: React.ReactNode | string;
  platinum: React.ReactNode | string;
}

interface PricingTableProps {
  features: FeatureRow[];
}

export const PricingTable = ({ features }: PricingTableProps) => {
  return (
    <Card>
      <CardHeader>
        <CardTitle className="text-xl">What's Included</CardTitle>
      </CardHeader>
      <CardContent>
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Features</TableHead>
              <TableHead>Silver</TableHead>
              <TableHead>Gold</TableHead>
              <TableHead>Platinum</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {features.map((row, index) => (
              <TableRow key={index}>
                <TableCell className="font-medium">{row.feature}</TableCell>
                <TableCell>{row.silver}</TableCell>
                <TableCell>{row.gold}</TableCell>
                <TableCell>{row.platinum}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </CardContent>
    </Card>
  );
};
