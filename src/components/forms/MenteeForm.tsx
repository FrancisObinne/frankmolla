import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { MenteeApplicationSchema, MenteeFormValues } from "@/schemas/signup";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Checkbox } from "@/components/ui/checkbox";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Loader2 } from "lucide-react";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";

// Define this in a shared constants file to reuse in both forms if needed
const AREAS_OF_INTEREST = [
  "Leading Self (emotional regulation, decision-making, personal clarity)",
  "Leading Teams (culture-building, feedback, conflict resolution)",
  "Leadership Mindset (confidence, humility, strategic presence)",
  "Sales & Influence (client engagement, storytelling, trust-building)",
  "Negotiation & Agreements (conflict navigation, dignified deal-making)",
  "Career Growth & Transitions (promotion, reinvention, legacy)",
  "Strategic Communication (executive presence, clarity under pressure)",
  "Relationship Building (mentorship, networks, nourishing partnerships)",
  "Adaptive Strategy (leading through uncertainty, systems thinking)",
] as const;

interface MenteeFormProps {
  onSubmit: (values: MenteeFormValues) => void;
  isSubmitting: boolean;
}

export const MenteeForm = ({ onSubmit, isSubmitting }: MenteeFormProps) => {
  const form = useForm<MenteeFormValues>({
    resolver: zodResolver(MenteeApplicationSchema),
    defaultValues: {
      fullName: "",
      email: "",
      roleTitle: "",
      organization: "",
      regionOfOperation: "",
      yearsInLeadership: 0,
      areasOfInterest: [],
      otherArea: "",
      currentChallenge: "",
      feelingStretched: "",
      supportNeeded: "",
      mentorshipFormat: undefined,
      cadence: undefined,
      delivery: undefined,
    },
  });

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
        {/* Section 1: Grounding Information */}
        <div className="space-y-4">
          <h3 className="text-lg font-semibold text-foreground">
            Section 1: Grounding Information
          </h3>

          <FormField
            control={form.control}
            name="fullName"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Full Name</FormLabel>
                <FormControl>
                  <Input {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="email"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Email Address</FormLabel>
                <FormControl>
                  <Input type="email" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="roleTitle"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Role / Title</FormLabel>
                <FormControl>
                  <Input {...field} placeholder="e.g., Senior Manager" />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="organization"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Organization</FormLabel>
                <FormControl>
                  <Input {...field} placeholder="e.g., Tech Company Inc." />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="regionOfOperation"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Region of Operation</FormLabel>
                <FormControl>
                  <Input {...field} placeholder="e.g., North America" />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="yearsInLeadership"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Years in Leadership</FormLabel>
                <FormControl>
                  <Input
                    type="number"
                    min="0"
                    {...field}
                    onChange={(e) =>
                      field.onChange(parseInt(e.target.value) || 0)
                    }
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
        </div>

        {/* Section 2: Areas of Mentorship Interest */}
        <div className="space-y-4">
          <h3 className="text-lg font-semibold text-foreground">
            Section 2: Areas of Mentorship Interest
          </h3>
          <p className="text-sm text-muted-foreground">
            Instructions: Please select the areas where you would value
            mentorship or deeper reflection. Choose all that apply.
          </p>

          <FormField
            control={form.control}
            name="areasOfInterest"
            render={() => (
              <FormItem>
                <div className="space-y-3">
                  {AREAS_OF_INTEREST.map((area) => (
                    <FormField
                      key={area}
                      control={form.control}
                      name="areasOfInterest"
                      render={({ field }) => (
                        <FormItem className="flex items-start space-x-3 space-y-0">
                          <FormControl>
                            <Checkbox
                              checked={field.value?.includes(area)}
                              onCheckedChange={(checked) => {
                                return checked
                                  ? field.onChange([...field.value, area])
                                  : field.onChange(
                                      field.value?.filter(
                                        (value) => value !== area
                                      )
                                    );
                              }}
                            />
                          </FormControl>
                          <FormLabel className="font-normal cursor-pointer">
                            {area}
                          </FormLabel>
                        </FormItem>
                      )}
                    />
                  ))}
                </div>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="otherArea"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Other (please specify)</FormLabel>
                <FormControl>
                  <Input {...field} placeholder="Specify any other area" />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
        </div>

        {/* Section 3: Self-Reflection Prompts */}
        <div className="space-y-4">
          <h3 className="text-lg font-semibold text-foreground">
            Section 3: Self-Reflection Prompts
          </h3>
          <p className="text-sm text-muted-foreground">
            Optional: Answer any that resonate with you.
          </p>

          <FormField
            control={form.control}
            name="currentChallenge"
            render={({ field }) => (
              <FormItem>
                <FormLabel>
                  What's one leadership challenge you're currently navigating?
                </FormLabel>
                <FormControl>
                  <Textarea {...field} rows={3} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="feelingStretched"
            render={({ field }) => (
              <FormItem>
                <FormLabel>
                  Where do you feel most stretched or uncertain in your role?
                </FormLabel>
                <FormControl>
                  <Textarea {...field} rows={3} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="supportNeeded"
            render={({ field }) => (
              <FormItem>
                <FormLabel>
                  What kind of support would feel nourishing right now?
                </FormLabel>
                <FormControl>
                  <Textarea {...field} rows={3} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
        </div>

        {/* Section 4: Format Preferences */}
        <div className="space-y-4">
          <h3 className="text-lg font-semibold text-foreground">
            Section 4: Format Preferences
          </h3>

          <FormField
            control={form.control}
            name="mentorshipFormat"
            render={({ field }) => (
              <FormItem className="space-y-3">
                <FormLabel>Preferred mentorship format</FormLabel>
                <FormControl>
                  <RadioGroup
                    onValueChange={field.onChange}
                    value={field.value}
                    className="flex flex-col space-y-1"
                  >
                    <FormItem className="flex items-center space-x-3 space-y-0">
                      <FormControl>
                        <RadioGroupItem value="one-on-one" />
                      </FormControl>
                      <FormLabel className="font-normal cursor-pointer">
                        One-on-one
                      </FormLabel>
                    </FormItem>
                    <FormItem className="flex items-center space-x-3 space-y-0">
                      <FormControl>
                        <RadioGroupItem value="small-group" />
                      </FormControl>
                      <FormLabel className="font-normal cursor-pointer">
                        Small group
                      </FormLabel>
                    </FormItem>
                    <FormItem className="flex items-center space-x-3 space-y-0">
                      <FormControl>
                        <RadioGroupItem value="hybrid" />
                      </FormControl>
                      <FormLabel className="font-normal cursor-pointer">
                        Hybrid
                      </FormLabel>
                    </FormItem>
                  </RadioGroup>
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="cadence"
            render={({ field }) => (
              <FormItem className="space-y-3">
                <FormLabel>Ideal cadence</FormLabel>
                <FormControl>
                  <RadioGroup
                    onValueChange={field.onChange}
                    value={field.value}
                    className="flex flex-col space-y-1"
                  >
                    <FormItem className="flex items-center space-x-3 space-y-0">
                      <FormControl>
                        <RadioGroupItem value="weekly" />
                      </FormControl>
                      <FormLabel className="font-normal cursor-pointer">
                        Weekly
                      </FormLabel>
                    </FormItem>
                    <FormItem className="flex items-center space-x-3 space-y-0">
                      <FormControl>
                        <RadioGroupItem value="bi-weekly" />
                      </FormControl>
                      <FormLabel className="font-normal cursor-pointer">
                        Bi-weekly
                      </FormLabel>
                    </FormItem>
                    <FormItem className="flex items-center space-x-3 space-y-0">
                      <FormControl>
                        <RadioGroupItem value="monthly" />
                      </FormControl>
                      <FormLabel className="font-normal cursor-pointer">
                        Monthly
                      </FormLabel>
                    </FormItem>
                  </RadioGroup>
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="delivery"
            render={({ field }) => (
              <FormItem className="space-y-3">
                <FormLabel>Preferred delivery</FormLabel>
                <FormControl>
                  <RadioGroup
                    onValueChange={field.onChange}
                    value={field.value}
                    className="flex flex-col space-y-1"
                  >
                    <FormItem className="flex items-center space-x-3 space-y-0">
                      <FormControl>
                        <RadioGroupItem value="virtual" />
                      </FormControl>
                      <FormLabel className="font-normal cursor-pointer">
                        Virtual
                      </FormLabel>
                    </FormItem>
                    <FormItem className="flex items-center space-x-3 space-y-0">
                      <FormControl>
                        <RadioGroupItem value="in-person" />
                      </FormControl>
                      <FormLabel className="font-normal cursor-pointer">
                        In-person
                      </FormLabel>
                    </FormItem>
                    <FormItem className="flex items-center space-x-3 space-y-0">
                      <FormControl>
                        <RadioGroupItem value="flexible" />
                      </FormControl>
                      <FormLabel className="font-normal cursor-pointer">
                        Flexible
                      </FormLabel>
                    </FormItem>
                  </RadioGroup>
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
        </div>

        <Button
          type="submit"
          className="w-full"
          size="lg"
          disabled={isSubmitting}
        >
          {isSubmitting && <Loader2 className="mr-2 h-4 w-4 animate-spin" />}
          Submit Application
        </Button>
      </form>
    </Form>
  );
};
