import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/of';
import { inherits } from 'util';
import { ApiService } from '../../shared/services/api.service';

export class SmartContractsContractItem {
    constructor(public blockId: string, public type: string, public hash: string, public destinationAddress: string, public amount: number) { }
}

export abstract class SmartContractsServiceBase {
    GetAddresses(walletName: string): Observable<string[]> { return Observable.of(); }
    GetBalance(walletName: string): Observable<number> { return Observable.of(); }
    GetAddressBalance(address: string): Observable<number> { return Observable.of(); }
    GetAddress(walletName: string): Observable<string> { return Observable.of(); }
    GetContracts(walletName: string): Observable<SmartContractsContractItem[]> { return Observable.of(); }
    GetSenderAddresses(walletName: string): Observable<string[]> { return Observable.of(); }
    GetParameterTypes(walletName: string): Observable<string[]> { return Observable.of(); }
    GetByteCode(walletName: string): Observable<string> { return Observable.of(); }
}

@Injectable()
export class SmartContractsService implements SmartContractsServiceBase
{
    constructor(private apiService: ApiService) { }

    GetBalance(walletName: string): Observable<number> {
        return this.apiService.getAccountBalance(walletName)
            .map(response => response.json());
    }

    GetAddressBalance(address: string): Observable<number> {
        return this.apiService.getAddressBalance(address)
            .map(response => response.json());
    }
    
    GetAddress(walletName: string): Observable<string> {
        return this.apiService.getAccountAddress(walletName)
            .map(response => response.json());
    }

    GetAddresses(walletName: string): Observable<string[]> {
        return this.apiService.getAccountAddresses(walletName)
            .map(response => response.json());
    }

    GetContracts(walletName: string): Observable<SmartContractsContractItem[]> {
        return Observable.of([
            new SmartContractsContractItem('7809', 'Transfert', 'bbdbcae72f1085710', 'i5idsdPyEwNqmor5bAYvFVqsin6uHgSfHB', 10898025),
            new SmartContractsContractItem('7810', 'Transfert', 'bbdbcae72f1085710', 'i5idsdPyEwNqmor5bAYvFVqsin6uHgSfHB', 11898025),
            new SmartContractsContractItem('7811', 'Transfert', 'bbdbcae72f1085710', 'i5idsdPyEwNqmor5bAYvFVqsin6uHgSfHB', 12898025),
            new SmartContractsContractItem('7812', 'Transfert', 'bbdbcae72f1085710', 'i5idsdPyEwNqmor5bAYvFVqsin6uHgSfHB', 13898025),
            new SmartContractsContractItem('7813', 'Transfert', 'bbdbcae72f1085710', 'i5idsdPyEwNqmor5bAYvFVqsin6uHgSfHB', 14898025),
            new SmartContractsContractItem('7814', 'Transfert', 'bbdbcae72f1085710', 'i5idsdPyEwNqmor5bAYvFVqsin6uHgSfHB', 15898025),
        ]);
    }

    GetSenderAddresses(walletName: string): Observable<string[]> {
        return Observable.of([
            'i5idsdPyEwNqmor5bAYvFVqsin6uHgSfHB',
            'i5idsdPyEwNqmor5bAYvFVqsin6uHgSfHB',
            'i5idsdPyEwNqmor5bAYvFVqsin6uHgSfHB'
        ]);
    }

    GetParameterTypes(walletName: string): Observable<string[]> {
        return Observable.of([
            'Type 1',
            'Type 2',
            'Type 3'
        ]);
    }

    GetByteCode(walletName: string): Observable<string> {
        return Observable.of('4D5A90000300000004000000FFFF0000B800000000000000400000000000000000000000000000000000000000000000000000000000000000000000800000000E1FBA0E00B409CD21B8014CCD21546869732070726F6772616D2063616E6E6F742062652072756E20696E20444F53206D6F64652E0D0D0A240000000000000050');
    }
}

@Injectable()
export class FakeSmartContractsService implements SmartContractsServiceBase {
    GetBalance(walletName: string): Observable<number> { return Observable.of(10898026); }

    GetAddress(walletName: string): Observable<string> { return Observable.of('i5idsdPyEwNqmor5bAYvFVqsin6uHgSfHB'); }

    GetContracts(walletName: string): Observable<SmartContractsContractItem[]> {
        return Observable.of([
            new SmartContractsContractItem('7809', 'Transfert', 'bbdbcae72f1085710', 'i5idsdPyEwNqmor5bAYvFVqsin6uHgSfHB', 10898025),
            new SmartContractsContractItem('7810', 'Transfert', 'bbdbcae72f1085710', 'i5idsdPyEwNqmor5bAYvFVqsin6uHgSfHB', 11898025),
            new SmartContractsContractItem('7811', 'Transfert', 'bbdbcae72f1085710', 'i5idsdPyEwNqmor5bAYvFVqsin6uHgSfHB', 12898025),
            new SmartContractsContractItem('7812', 'Transfert', 'bbdbcae72f1085710', 'i5idsdPyEwNqmor5bAYvFVqsin6uHgSfHB', 13898025),
            new SmartContractsContractItem('7813', 'Transfert', 'bbdbcae72f1085710', 'i5idsdPyEwNqmor5bAYvFVqsin6uHgSfHB', 14898025),
            new SmartContractsContractItem('7814', 'Transfert', 'bbdbcae72f1085710', 'i5idsdPyEwNqmor5bAYvFVqsin6uHgSfHB', 15898025),
        ]);
    }

    GetSenderAddresses(walletName: string): Observable<string[]> {
        return Observable.of([
            'i5idsdPyEwNqmor5bAYvFVqsin6uHgSfHB',
            'i5idsdPyEwNqmor5bAYvFVqsin6uHgSfHB',
            'i5idsdPyEwNqmor5bAYvFVqsin6uHgSfHB'
        ]);
    }

    GetParameterTypes(walletName: string): Observable<string[]> {
        return Observable.of([
            'Type 1',
            'Type 2',
            'Type 3'
        ]);
    }

    GetByteCode(walletName: string): Observable<string> {
        return Observable.of('4D5A90000300000004000000FFFF0000B800000000000000400000000000000000000000000000000000000000000000000000000000000000000000800000000E1FBA0E00B409CD21B8014CCD21546869732070726F6772616D2063616E6E6F742062652072756E20696E20444F53206D6F64652E0D0D0A240000000000000050');
    }

    GetAddresses(walletName: string): Observable<string[]> { 
        return Observable.of([
            'i5idsdPyEwNqmor5bAYvFVqsin6uHgSfHB',
            'i5idsdPyEwNqmor5bAYvFVqsin6uHgSfHB',
            'i5idsdPyEwNqmor5bAYvFVqsin6uHgSfHB'
        ]); 
    }

    GetAddressBalance(address: string): Observable<number> { 
        return Observable.of(10898026);
    }
}
