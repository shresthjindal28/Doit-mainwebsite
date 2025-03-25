import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addToCart } from '@/store/cartSlice';
import { MainService, SubService } from '@/data/services';
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";

interface ServiceCardProps {
  service: MainService;
}

export const ServiceCard = ({ service }: ServiceCardProps) => {
  const [isOpen, setIsOpen] = useState(false);
  const dispatch = useDispatch();

  const handleSubServiceSelect = (subService: SubService) => {
    dispatch(addToCart({
      mainServiceId: service.id,
      mainServiceName: service.name,
      subService
    }));
  };

  return (
    <>
      <Card className="hover:scale-105 transition-transform cursor-pointer"
            onClick={() => setIsOpen(true)}>
        <CardHeader>
          <CardTitle>{service.name}</CardTitle>
        </CardHeader>
        <CardContent>
          <img src={service.image} alt={service.name} className="w-full h-48 object-cover rounded-md" />
        </CardContent>
      </Card>

      <Dialog open={isOpen} onOpenChange={setIsOpen}>
        <DialogContent className="max-w-2xl">
          <DialogHeader>
            <DialogTitle>{service.name}</DialogTitle>
          </DialogHeader>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 p-4">
            {service.subServices.map((subService) => (
              <Card key={subService.id} 
                    className="cursor-pointer hover:bg-gray-100"
                    onClick={() => handleSubServiceSelect(subService)}>
                <CardHeader>
                  <CardTitle className="text-lg">{subService.name}</CardTitle>
                  <CardDescription>{subService.provider}</CardDescription>
                </CardHeader>
              </Card>
            ))}
          </div>
        </DialogContent>
      </Dialog>
    </>
  );
};
