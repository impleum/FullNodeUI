import { Observable } from "rxjs";
import { Injectable } from "@angular/core";

import { ApiService } from '../../shared/services/api.service';

export class AddressBookItem {
    constructor(public name: string, public address: string) { }
}

export abstract class AddressBookServiceBase {
    AddAddress(label: string, address: string): Observable<boolean> { return Observable.of(); }
    RemoveAddress(label: string): Observable<boolean> { return Observable.of(); }
    GetAddresses(skip: number, take: number): Observable<AddressBookItem[]> { return Observable.of(); }
};

@Injectable()
export class FakeAddressBookService implements AddressBookServiceBase {
    AddAddress(label: string, address: string): Observable<boolean> { return Observable.of(true); }
    RemoveAddress(label: string): Observable<boolean> { return Observable.of(true); }
    GetAddresses(skip: number, take: number): Observable<AddressBookItem[]> {
        return Observable.of([
            new AddressBookItem("Bertrand D", "i5idsdPyEwNqmor5bAYvFVqsin6uHgSfHB"),
            new AddressBookItem("Paul H", "i5idsdPyEwNqmor5bAYvFVqsin6uHgSfHB"),
            new AddressBookItem("Ferdeen M", "i5idsdPyEwNqmor5bAYvFVqsin6uHgSfHB")
        ]);
    }
};

@Injectable()
export class AddressBookService implements AddressBookServiceBase {
    private fakeService = new FakeAddressBookService();
    constructor(private apiService: ApiService) {}

    AddAddress(label: string, address: string): Observable<boolean> { 
        return this.apiService.addAddressBookAddress(label, address).map(_ => true);
    }

    RemoveAddress(label: string): Observable<boolean> { 
        return this.apiService.removeAddressBookAddress(label).map(_ => true);
    }

    GetAddresses(skip: number, take: number): Observable<AddressBookItem[]> {
        return this.fakeService.GetAddresses(skip, take);
        //return this.apiService.getAddressBookAddresses(skip, take)
        //                      .map(x => x.addresses.map(a => new AddressBookItem(a.address, a.label)));
    }
};
