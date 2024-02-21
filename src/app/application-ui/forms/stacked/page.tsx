'use client'

import { Image, UserCircle } from 'lucide-react'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'
import { Button } from '@/components/ui/button'
import { Separator } from '@/components/ui/separator'
import { Checkbox } from '@/components/ui/checkbox'
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group'
import { Label } from '@/components/ui/label'

const StackedFormPage = () => {
  return (
    <div className="container flex items-center justify-center space-y-6 p-10">
      <div className="space-y-16">
        <div>
          <div className="pb-4 font-semibold text-gray-700">
            Stacked
            <span className="ml-4 rounded-lg bg-slate-100 p-1.5 text-xs font-semibold text-slate-600">Preview</span>
          </div>
          <div className="max-w-7xl space-y-10 rounded-lg border p-36">
            <div>
              <div className="font-semibold text-gray-700">Profile</div>
              <div className="pt-2 text-sm text-gray-500">
                This information will be displayed publicly so be careful what you share.
              </div>
            </div>
            <div className="space-y-2">
              <div className="text-sm font-semibold text-gray-700">Username</div>
              <Input placeholder="tarun@prodios.com" />
            </div>
            <div className="space-y-2">
              <div className="text-sm font-semibold text-gray-700">About</div>
              <Textarea rows={5} />
              <div className="text-sm text-gray-500">Write a few sentences about yourself.</div>
            </div>

            <div className="space-y-2">
              <div className="text-sm font-semibold text-gray-700">Photo</div>
              <div className="flex items-center space-x-3">
                <UserCircle color="gray" size={40} className="opacity-40" />
                <Button variant="outline" size="sm" className="font-semibold">
                  Change
                </Button>
              </div>
            </div>

            <div>
              <div className="pb-2 text-sm font-semibold text-gray-700">Cover photo</div>
              <div className="item flex h-40 w-full items-center justify-center rounded-sm border border-dashed border-gray-400">
                <div className="flex flex-col items-center justify-center space-y-2">
                  <Image color="gray" size={48} className="opacity-40" />
                  <div>
                    <span className="text-sm font-semibold text-blue-600">Upload a file &nbsp;</span>
                    <span className="text-sm text-gray-600">or drag and drop</span>
                    <div className="text-sm text-gray-600">PNG, JPG, GIF up to 10MB</div>
                  </div>
                </div>
              </div>
            </div>

            <Separator />

            <div className="space-y-2">
              <div className="font-semibold">Personal Information</div>
              <div className="text-sm text-gray-600">Use a permanent address where you can receive mail.</div>
            </div>

            <div className="grid grid-cols-6 gap-4">
              <div className="col-span-3 space-y-2">
                <div className="text-sm font-semibold text-gray-700">First name</div>
                <Input placeholder="Tarun" />
              </div>
              <div className="col-span-3 space-y-2">
                <div className="text-sm font-semibold text-gray-700">Last name</div>
                <Input placeholder="Joshi" />
              </div>

              <div className="col-span-4 space-y-2">
                <div className="text-sm font-semibold text-gray-700">Email</div>
                <Input placeholder="tarun@prodios.com" />
              </div>
              <div />

              <div className="col-span-3 space-y-2">
                <div className="text-sm font-semibold text-gray-700">Country</div>
                <Input placeholder="India" />
              </div>

              <div className="col-span-6 space-y-2">
                <div className="text-sm font-semibold text-gray-700">Street address</div>
                <Input />
              </div>

              <div className="col-span-2 space-y-2">
                <div className="text-sm font-semibold text-gray-700">City</div>
                <Input />
              </div>
              <div className="col-span-2 space-y-2">
                <div className="text-sm font-semibold text-gray-700">State / Province</div>
                <Input />
              </div>
              <div className="col-span-2 space-y-2">
                <div className="text-sm font-semibold text-gray-700">ZIP / Postal code</div>
                <Input />
              </div>
            </div>

            <div className="space-y-2">
              <div className="font-semibold">Notifications</div>
              <div className="text-sm text-gray-600">
                We&apos;ll always let you know about important changes, but you pick what else you want to hear about.
              </div>
            </div>

            <div className="space-y-2">
              <div className="mb-4 text-sm font-semibold">By Email</div>

              <div className="space-y-2">
                <div className="flex gap-x-2">
                  <Checkbox id="comments" />
                  <div className="flex-col">
                    <div className="text-sm font-semibold text-gray-700">Comments</div>
                    <span className="text-sm text-gray-600">
                      Get notified when someones posts a comment on a posting.
                    </span>
                  </div>
                </div>
              </div>

              <div className="space-y-2">
                <div className="flex gap-x-2">
                  <Checkbox id="candidates" />
                  <div className="flex-col">
                    <div className="text-sm font-semibold text-gray-700">Candidates</div>
                    <span className="text-sm text-gray-600">Get notified when a candidate applies for a job.</span>
                  </div>
                </div>
              </div>

              <div className="space-y-2">
                <div className="flex gap-x-2">
                  <Checkbox id="offers" />
                  <div className="flex-col">
                    <div className="text-sm font-semibold text-gray-700">Offers</div>
                    <span className="text-sm text-gray-600">
                      Get notified when a candidate accepts or rejects an offer.
                    </span>
                  </div>
                </div>
              </div>
            </div>

            <div className="space-y-2">
              <div className="mb-4 flex flex-col">
                <div className="text-sm font-semibold text-gray-700">Push Notifications</div>
                <div className="mt-2 text-sm text-gray-600">These are delivered via SMS to your mobile phone.</div>
              </div>
              <RadioGroup defaultValue="comfortable" className="space-y-4">
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="default" id="r1" />
                  <Label htmlFor="r1">Everything</Label>
                </div>
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="comfortable" id="r2" />
                  <Label htmlFor="r2">Same as email</Label>
                </div>
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="compact" id="r3" />
                  <Label htmlFor="r3">No push notifications</Label>
                </div>
              </RadioGroup>

              <Separator />

              <div className="flex justify-end space-x-2 pt-4">
                <Button variant="ghost">Cancel</Button>
                <Button className="bg-indigo-600">Save</Button>
              </div>
            </div>
          </div>
        </div>
        <div>
          <div className="pb-4 font-semibold text-gray-700">
            Two-column
            <span className="ml-3 rounded-lg bg-slate-100 p-1.5 text-xs font-semibold text-slate-600">Preview</span>
          </div>

          <div className="grid max-w-7xl grid-cols-3 rounded-lg border">
            <div className="col-span-1 justify-items-center px-8 pt-32">
              <div className="font-bold text-gray-700">Profile</div>
              <div className="pt-2 text-sm text-gray-500">
                This information will be displayed publicly so be careful what you share.
              </div>
            </div>

            <div className=" space-x-4">
              <div className="col-span-2 space-y-4 pt-32 ">
                <div className="space-y-2">
                  <div className="text-sm font-semibold text-gray-700">Website</div>
                  <Input placeholder="https://example.com" />
                </div>

                <div className="space-y-2">
                  <div className="text-sm font-semibold text-gray-700">About</div>
                  <Textarea rows={5} />
                  <div className="text-sm text-gray-600">Write a few sentences about yourself.</div>
                </div>

                <div className="space-y-2">
                  <div className="text-sm font-semibold text-gray-700">Photo</div>
                  <div className="flex items-center space-x-3">
                    <UserCircle color="gray" size={45} className="opacity-40" />
                    <Button variant="outline" size="sm" className="font-semibold">
                      Change
                    </Button>
                  </div>
                </div>

                <div>
                  <div className="pb-2 text-sm font-semibold text-gray-700">Cover photo</div>
                  <div className="item flex h-40 w-full items-center justify-center rounded-sm border border-dashed border-gray-400">
                    <div className="flex flex-col items-center justify-center space-y-2">
                      <Image color="gray" size={48} className="opacity-40" />
                      <div>
                        <span className="text-sm font-semibold text-blue-600">Upload a file &nbsp;</span>
                        <span className="text-sm text-gray-600">or drag and drop</span>
                        <div className="text-sm text-gray-600">PNG, JPG, GIF up to 10MB</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-span-3 p-10">
              <Separator />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default StackedFormPage
