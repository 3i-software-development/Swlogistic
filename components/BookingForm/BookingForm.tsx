


import * as React from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import {
  Form,
  FormField,
  FormItem,
  FormLabel,
  FormControl,
  FormMessage,
  FormDescription,
} from "../ui/form";
import { Input } from "../ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "../ui/select";
import { Checkbox } from "../ui/checkbox";
import { Table, TableHeader, TableBody, TableFooter, TableHead, TableRow, TableCell, TableCaption } from "../ui/table";
import { Button } from "../ui/button";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription, DialogClose, DialogFooter } from "../ui/dialog";


// Zod schema for form validation (simplified for demo)
const bookingSchema = z.object({
  shipFromContact: z.string().min(1, "Required"),
  shipFromCompany: z.string().optional(),
  shipFromCountry: z.string().min(1, "Required"),
  shipFromPostal: z.string().min(1, "Required"),
  shipFromCity: z.string().min(1, "Required"),
  shipFromState: z.string().min(1, "Required"),
  shipFromAddress1: z.string().min(1, "Required"),
  shipFromAddress2: z.string().optional(),
  shipFromAddress3: z.string().optional(),
  shipFromPhone: z.string().min(1, "Required"),
  shipFromPhoneExt: z.string().optional(),
  shipFromEmail: z.string().email().optional(),
  shipFromResidential: z.boolean().optional(),
  shipFromSave: z.boolean().optional(),
  // DELIVER TO fields
  deliverToContact: z.string().min(1, "Required"),
  deliverToCompany: z.string().optional(),
  deliverToCountry: z.string().min(1, "Required"),
  deliverToPostal: z.string().min(1, "Required"),
  deliverToCity: z.string().min(1, "Required"),
  deliverToState: z.string().min(1, "Required"),
  deliverToAddress1: z.string().min(1, "Required"),
  deliverToAddress2: z.string().optional(),
  deliverToAddress3: z.string().optional(),
  deliverToPhone: z.string().min(1, "Required"),
  deliverToPhoneExt: z.string().optional(),
  deliverToEmail: z.string().email().optional(),
  deliverToResidential: z.boolean().optional(),
  deliverToSave: z.boolean().optional(),
  // PACKAGE DETAILS fields
  packageCode: z.string().min(1, "Required"),
  packageTitle: z.string().min(1, "Required"),
  packageSpecs: z.string().optional(),
  packageAttr: z.string().optional(),
  carriageValue: z.string().optional(),
  unitWeight: z.string().min(1, "Required"),
  currency: z.string().min(1, "Required"),
  shippingType: z.string().min(1, "Required"),
  packaging: z.string().min(1, "Required"),
  // ITEMS fields (demo: just one item, array can be added later)
  itemTitle: z.string().optional(),
  itemSpec: z.string().optional(),
  itemNote: z.string().optional(),
  itemQty: z.string().optional(),
});

type BookingFormValues = z.infer<typeof bookingSchema>;

export default function BookingForm({ open, onClose }: { open: boolean, onClose: () => void }) {
  const form = useForm<BookingFormValues>({
    resolver: zodResolver(bookingSchema),
    defaultValues: {
      shipFromContact: "",
      shipFromCompany: "",
      shipFromCountry: "",
      shipFromPostal: "",
      shipFromCity: "",
      shipFromState: "",
      shipFromAddress1: "",
      shipFromAddress2: "",
      shipFromAddress3: "",
      shipFromPhone: "",
      shipFromPhoneExt: "",
      shipFromEmail: "",
      shipFromResidential: false,
      shipFromSave: false,
      deliverToContact: "",
      deliverToCompany: "",
      deliverToCountry: "",
      deliverToPostal: "",
      deliverToCity: "",
      deliverToState: "",
      deliverToAddress1: "",
      deliverToAddress2: "",
      deliverToAddress3: "",
      deliverToPhone: "",
      deliverToPhoneExt: "",
      deliverToEmail: "",
      deliverToResidential: false,
      deliverToSave: false,
      packageCode: "",
      packageTitle: "",
      packageSpecs: "",
      packageAttr: "",
      carriageValue: "",
      unitWeight: "",
      currency: "",
      shippingType: "",
      packaging: "",
      itemTitle: "",
      itemSpec: "",
      itemNote: "",
      itemQty: "0",
    },
  });

  function onSubmit(values: BookingFormValues) {
    // Handle form submission
    console.log(values);
    onClose();
  }

  return (
    <Dialog open={open} onOpenChange={v => { if (!v) onClose(); }}>
      <DialogContent className="w-full max-w-lg sm:max-w-2xl md:max-w-3xl lg:max-w-4xl xl:max-w-7xl max-h-[90vh] p-0 flex flex-col items-center justify-center overflow-y-auto">
        <DialogHeader className="p-6 border-b">
          <DialogTitle className="text-lg sm:text-xl md:text-2xl font-bold text-red-500 flex items-center gap-2">
            <span role="img" aria-label="package">📦</span> Booking Shipment Order
          </DialogTitle>
          <DialogDescription className="text-xs sm:text-sm md:text-base">Fill in the shipment, sender, receiver and package details below.</DialogDescription>
        </DialogHeader>
        <div className="p-4 sm:p-6 bg-white max-h-[80vh] overflow-y-auto w-full">
          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
              {/* SHIP FROM & DELIVER TO (side by side on desktop) */}
              <div className="grid grid-cols-1 gap-6">
                {/* SHIP FROM */}
                <div className="rounded-lg p-3 sm:p-4 shadow-md mb-6 bg-white">
                  <div className="flex items-center gap-2 mb-2 text-red-500 font-bold text-base sm:text-lg">
                    <span role="img" aria-label="truck">🚚</span> SHIP FROM
                  </div>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 mb-2">
                    <FormField control={form.control} name="shipFromContact" render={({ field }) => (<FormItem><FormLabel>Contact Name *</FormLabel><FormControl><Input {...field} placeholder="Contact Name" /></FormControl><FormMessage /></FormItem>)} />
                    <FormField control={form.control} name="shipFromCompany" render={({ field }) => (<FormItem><FormLabel>Company (Optional)</FormLabel><FormControl><Input {...field} placeholder="Company" /></FormControl><FormMessage /></FormItem>)} />
                  </div>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 mb-2">
                    <FormField control={form.control} name="shipFromCountry" render={({ field }) => (<FormItem><FormLabel>Country</FormLabel><FormControl><Select onValueChange={field.onChange} defaultValue={field.value}><SelectTrigger className="w-full"><SelectValue placeholder="Select country" /></SelectTrigger><SelectContent><SelectItem value="vn">Vietnam</SelectItem><SelectItem value="us">USA</SelectItem></SelectContent></Select></FormControl><FormMessage /></FormItem>)} />
                    <FormField control={form.control} name="shipFromPostal" render={({ field }) => (<FormItem><FormLabel>Postal Code *</FormLabel><FormControl><Input {...field} placeholder="Postal Code" /></FormControl><FormMessage /></FormItem>)} />
                  </div>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 mb-2">
                    <FormField control={form.control} name="shipFromCity" render={({ field }) => (<FormItem><FormLabel>City</FormLabel><FormControl><Input {...field} placeholder="City" /></FormControl><FormMessage /></FormItem>)} />
                    <FormField control={form.control} name="shipFromState" render={({ field }) => (
                      <FormItem>
                        <FormLabel>State</FormLabel>
                        <FormControl>
                          <Select onValueChange={field.onChange} defaultValue={field.value}>
                            <SelectTrigger className="w-full"><SelectValue placeholder="Select state" /></SelectTrigger>
                            <SelectContent>
                              <SelectItem value="hcm">HCM</SelectItem>
                              <SelectItem value="hn">HN</SelectItem>
                            </SelectContent>
                          </Select>
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )} />
                  </div>
                  <div className="mb-2"><FormField control={form.control} name="shipFromAddress1" render={({ field }) => (<FormItem><FormLabel>Address line 1 *</FormLabel><FormControl><Input {...field} placeholder="Address line 1" /></FormControl><FormMessage /></FormItem>)} /></div>
                  <div className="mb-2"><FormField control={form.control} name="shipFromAddress2" render={({ field }) => (<FormItem><FormLabel>Address line 2</FormLabel><FormControl><Input {...field} placeholder="Address line 2" /></FormControl><FormMessage /></FormItem>)} /></div>
                  <div className="mb-2"><FormField control={form.control} name="shipFromAddress3" render={({ field }) => (<FormItem><FormLabel>Address line 3</FormLabel><FormControl><Input {...field} placeholder="Address line 3" /></FormControl><FormMessage /></FormItem>)} /></div>
                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-2 mb-2">
                    <FormField control={form.control} name="shipFromPhone" render={({ field }) => (<FormItem><FormLabel>Phone *</FormLabel><FormControl><Input {...field} placeholder="Phone" /></FormControl><FormMessage /></FormItem>)} />
                    <FormField control={form.control} name="shipFromPhoneExt" render={({ field }) => (<FormItem><FormLabel>Phone EXT</FormLabel><FormControl><Input {...field} placeholder="Phone EXT" /></FormControl><FormMessage /></FormItem>)} />
                    <FormField control={form.control} name="shipFromEmail" render={({ field }) => (<FormItem><FormLabel>Email</FormLabel><FormControl><Input {...field} placeholder="Email" /></FormControl><FormMessage /></FormItem>)} />
                  </div>
                  <div className="flex items-center gap-2 mb-2">
                    <FormField control={form.control} name="shipFromResidential" render={({ field }) => (<FormItem className="flex items-center space-x-2"><FormControl><Checkbox checked={field.value} onCheckedChange={field.onChange} /></FormControl><FormLabel>This is a residential address</FormLabel></FormItem>)} />
                    <div className="flex-1"></div>
                    <FormField control={form.control} name="shipFromSave" render={({ field }) => (<FormItem className="flex items-center space-x-2"><FormControl><Checkbox checked={field.value} onCheckedChange={field.onChange} /></FormControl><FormLabel>Save new sender address book</FormLabel></FormItem>)} />
                  </div>
                </div>
                {/* DELIVER TO - custom layout */}
                <div className="rounded-lg p-3 sm:p-4 shadow-md mb-6 bg-white">
                  <div className="flex items-center gap-2 mb-2 text-red-500 font-bold text-base sm:text-lg">
                    <span role="img" aria-label="pin">📍</span> DELIVER TO
                  </div>
                  <div className="mb-2">
                    <FormField control={form.control} name="deliverToContact" render={({ field }) => (<FormItem><FormLabel>Contact Name *</FormLabel><FormControl><Input {...field} placeholder="Contact Name" /></FormControl><FormMessage /></FormItem>)} />
                  </div>
                  <div className="mb-2">
                    <FormField control={form.control} name="deliverToCompany" render={({ field }) => (<FormItem><FormLabel>Company (Optional)</FormLabel><FormControl><Input {...field} placeholder="Company" /></FormControl><FormMessage /></FormItem>)} />
                  </div>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 mb-2">
                    <FormField control={form.control} name="deliverToCountry" render={({ field }) => (<FormItem><FormLabel>Country</FormLabel><FormControl><Select onValueChange={field.onChange} defaultValue={field.value}><SelectTrigger className="w-full"><SelectValue placeholder="Select country" /></SelectTrigger><SelectContent><SelectItem value="vn">Vietnam</SelectItem><SelectItem value="us">USA</SelectItem></SelectContent></Select></FormControl><FormMessage /></FormItem>)} />
                    <FormField control={form.control} name="deliverToPostal" render={({ field }) => (<FormItem><FormLabel>Postal Code *</FormLabel><FormControl><Input {...field} placeholder="Postal Code" /></FormControl><FormMessage /></FormItem>)} />
                  </div>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 mb-2">
                    <FormField control={form.control} name="deliverToCity" render={({ field }) => (<FormItem><FormLabel>City</FormLabel><FormControl><Input {...field} placeholder="City" /></FormControl><FormMessage /></FormItem>)} />
                    <FormField control={form.control} name="deliverToState" render={({ field }) => (
                      <FormItem>
                        <FormLabel>State</FormLabel>
                        <FormControl>
                          <Select onValueChange={field.onChange} defaultValue={field.value}>
                            <SelectTrigger className="w-full"><SelectValue placeholder="Select state" /></SelectTrigger>
                            <SelectContent>
                              <SelectItem value="hcm">HCM</SelectItem>
                              <SelectItem value="hn">HN</SelectItem>
                            </SelectContent>
                          </Select>
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )} />
                  </div>
                  <div className="mb-2"><FormField control={form.control} name="deliverToAddress1" render={({ field }) => (<FormItem><FormLabel>Address line 1 *</FormLabel><FormControl><Input {...field} placeholder="Address line 1" /></FormControl><FormMessage /></FormItem>)} /></div>
                  <div className="mb-2"><FormField control={form.control} name="deliverToAddress2" render={({ field }) => (<FormItem><FormLabel>Address line 2</FormLabel><FormControl><Input {...field} placeholder="Address line 2" /></FormControl><FormMessage /></FormItem>)} /></div>
                  <div className="mb-2"><FormField control={form.control} name="deliverToAddress3" render={({ field }) => (<FormItem><FormLabel>Address line 3</FormLabel><FormControl><Input {...field} placeholder="Address line 3" /></FormControl><FormMessage /></FormItem>)} /></div>
                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-2 mb-2">
                    <FormField control={form.control} name="deliverToPhone" render={({ field }) => (<FormItem><FormLabel>Phone *</FormLabel><FormControl><Input {...field} placeholder="Phone" /></FormControl><FormMessage /></FormItem>)} />
                    <FormField control={form.control} name="deliverToPhoneExt" render={({ field }) => (<FormItem><FormLabel>Phone EXT</FormLabel><FormControl><Input {...field} placeholder="Phone EXT" /></FormControl><FormMessage /></FormItem>)} />
                    <FormField control={form.control} name="deliverToEmail" render={({ field }) => (<FormItem><FormLabel>Email</FormLabel><FormControl><Input {...field} placeholder="Email" /></FormControl><FormMessage /></FormItem>)} />
                  </div>
                  <div className="flex items-center gap-2 mb-2">
                    <FormField control={form.control} name="deliverToResidential" render={({ field }) => (<FormItem className="flex items-center space-x-2"><FormControl><Checkbox checked={field.value} onCheckedChange={field.onChange} /></FormControl><FormLabel>This is a residential address</FormLabel></FormItem>)} />
                    <div className="flex-1"></div>
                    <FormField control={form.control} name="deliverToSave" render={({ field }) => (<FormItem className="flex items-center space-x-2"><FormControl><Checkbox checked={field.value} onCheckedChange={field.onChange} /></FormControl><FormLabel>Save new sender address book</FormLabel></FormItem>)} />
                  </div>
                </div>
              </div>
              {/* PACKAGE DETAILS */}
              <div className="rounded-lg p-3 sm:p-4 shadow-md mb-6 bg-white">
                <div className="flex items-center gap-2 mb-2 text-red-500 font-bold text-base sm:text-lg">
                  <span role="img" aria-label="package">📦</span> PACKAGE DETAILS
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 mb-2">
                  <FormField control={form.control} name="packageCode" render={({ field }) => (<FormItem><FormLabel>Package Code *</FormLabel><FormControl><Input {...field} placeholder="Enter package code" /></FormControl><FormMessage /></FormItem>)} />
                  <FormField control={form.control} name="packageTitle" render={({ field }) => (<FormItem><FormLabel>Package Title *</FormLabel><FormControl><Input {...field} placeholder="Enter package title" /></FormControl><FormMessage /></FormItem>)} />
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 mb-2">
                  <FormField control={form.control} name="packageSpecs" render={({ field }) => (<FormItem><FormLabel>Specifications</FormLabel><FormControl><Input {...field} placeholder="Enter specifications" /></FormControl><FormMessage /></FormItem>)} />
                  <FormField control={form.control} name="packageAttr" render={({ field }) => (<FormItem><FormLabel>Attr json</FormLabel><FormControl><Input {...field} placeholder="Enter attr_json" /></FormControl><FormMessage /></FormItem>)} />
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-5 gap-2 mb-2">
                  <div className="w-full"><FormField control={form.control} name="carriageValue" render={({ field }) => (<FormItem><FormLabel>Carriage Value</FormLabel><FormControl><Input {...field} placeholder="Enter value" /></FormControl><FormMessage /></FormItem>)} /></div>
                  <div className="w-full"><FormField control={form.control} name="unitWeight" render={({ field }) => (<FormItem><FormLabel>Unit of weight/dimension *</FormLabel><FormControl><Select onValueChange={field.onChange} defaultValue={field.value}><SelectTrigger className="w-full"><SelectValue placeholder="Select unit" /></SelectTrigger><SelectContent><SelectItem value="kg">Kg</SelectItem><SelectItem value="lb">Lb</SelectItem></SelectContent></Select></FormControl><FormMessage /></FormItem>)} /></div>
                  <div className="w-full"><FormField control={form.control} name="currency" render={({ field }) => (<FormItem><FormLabel>Currency *</FormLabel><FormControl><Select onValueChange={field.onChange} defaultValue={field.value}><SelectTrigger className="w-full"><SelectValue placeholder="Select currency" /></SelectTrigger><SelectContent><SelectItem value="vnd">VND</SelectItem><SelectItem value="usd">USD</SelectItem></SelectContent></Select></FormControl><FormMessage /></FormItem>)} /></div>
                  <div className="w-full"><FormField control={form.control} name="shippingType" render={({ field }) => (<FormItem><FormLabel>What are you shipping? *</FormLabel><FormControl><Select onValueChange={field.onChange} defaultValue={field.value}><SelectTrigger className="w-full"><SelectValue placeholder="Select type" /></SelectTrigger><SelectContent><SelectItem value="doc">Document</SelectItem><SelectItem value="parcel">Parcel</SelectItem></SelectContent></Select></FormControl><FormMessage /></FormItem>)} /></div>
                  <div className="w-full"><FormField control={form.control} name="packaging" render={({ field }) => (<FormItem><FormLabel>Packaging *</FormLabel><FormControl><Select onValueChange={field.onChange} defaultValue={field.value}><SelectTrigger className="w-full"><SelectValue placeholder="Select packaging" /></SelectTrigger><SelectContent><SelectItem value="box">Box</SelectItem><SelectItem value="bag">Bag</SelectItem></SelectContent></Select></FormControl><FormMessage /></FormItem>)} /></div>
                </div>
              </div>
              {/* ITEMS */}
              <div className="rounded-lg p-3 sm:p-4 shadow-md mb-6 bg-white">
                <div className="flex items-center gap-2 mb-2 text-red-500 font-bold text-base sm:text-lg">
                  <span role="img" aria-label="box">📦</span> ITEMS
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-2 mb-2">
                  <FormField control={form.control} name="itemTitle" render={({ field }) => (<FormItem><FormLabel>Item Title</FormLabel><FormControl><Input {...field} placeholder="Enter title" /></FormControl><FormMessage /></FormItem>)} />
                  <FormField control={form.control} name="itemSpec" render={({ field }) => (<FormItem><FormLabel>Specification</FormLabel><FormControl><Input {...field} placeholder="Enter item specification" /></FormControl><FormMessage /></FormItem>)} />
                  <FormField control={form.control} name="itemNote" render={({ field }) => (<FormItem><FormLabel>Note</FormLabel><FormControl><Input {...field} placeholder="Enter item note" /></FormControl><FormMessage /></FormItem>)} />
                  <FormField control={form.control} name="itemQty" render={({ field }) => (<FormItem><FormLabel>Quantity</FormLabel><FormControl><Input {...field} placeholder="0" type="number" min="0" /></FormControl><FormMessage /></FormItem>)} />
                </div>
                {/* Table header */}
                <div className="overflow-x-auto">
                  {/* shadcn/ui Table */}
                  <div className="overflow-x-auto">
                    <Table>
                      <TableHeader>
                        <TableRow>
                          <TableHead className="px-2 py-1 border">NO.</TableHead>
                          <TableHead className="px-2 py-1 border">ITEM_CODE</TableHead>
                          <TableHead className="px-2 py-1 border">PACKAGE_CODE</TableHead>
                          <TableHead className="px-2 py-1 border">SHIPMENT_CODE *</TableHead>
                          <TableHead className="px-2 py-1 border">WEIGHT PER PACKAGE *</TableHead>
                          <TableHead className="px-2 py-1 border">L *</TableHead>
                          <TableHead className="px-2 py-1 border">W *</TableHead>
                          <TableHead className="px-2 py-1 border">H *</TableHead>
                          <TableHead className="px-2 py-1 border">AHS PACKAGING</TableHead>
                        </TableRow>
                      </TableHeader>
                      <TableBody>
                        <TableRow>
                          <TableCell className="px-2 py-1 border text-center" colSpan={9}>Không có dữ liệu</TableCell>
                        </TableRow>
                      </TableBody>
                    </Table>
                  </div>
                </div>
                <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mt-2 text-sm gap-2">
                  <span>Total Pkgs: 0</span>
                  <span>Total Weight: 0</span>
                  <Button className="sm:ml-auto w-full sm:w-auto" type="button">Add Shipment Order</Button>
                </div>
              </div>
              <DialogFooter className="p-4 border-t">
                <Button type="submit">Submit</Button>
                <DialogClose asChild>
                  <Button type="button" variant="secondary" className="ml-2">Đóng</Button>
                </DialogClose>
              </DialogFooter>
            </form>
          </Form>
        </div>
      </DialogContent>
    </Dialog>
  );
}

