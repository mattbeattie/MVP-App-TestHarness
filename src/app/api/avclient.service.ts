import { Injectable } from '@angular/core';
import { StatuscodeService } from 'src/app/api/statuscode.service';
import { ToastController,AlertController,LoadingController ,NavController} from "@ionic/angular";
import { Router } from '@angular/router';


@Injectable({
  providedIn: 'root'
})
export class AvclientService {
  cachedAccessCode: any;
  serverURL: any;
  // _serverURL: any;
  // _status: StatusCode = StatusCode.Uninitialized;
  _cachedAccessCode: any;
  constructor(public statuscodeService: StatuscodeService,
    private alertctrl: AlertController,
    private route: Router, ) {}

  purgeData() {
    delete this.cachedAccessCode;
  }
  assignServerUrl(bulletinBoardURL) {
    this.serverURL = bulletinBoardURL;
  }
  get serverurl() {
    return this.serverURL;
  }

  set serverurl(value) {
    this.serverURL = value;
  }

  status() {
    return this.statuscodeService.statusCode('Uninitialized');
  }

  requestAccessCode(opaqueVoterId) {
    return new Promise((resolve, reject) => {
      switch (opaqueVoterId) {
        case '00000':
          reject(new Error(this.statuscodeService.statusCode('VoterRecordNotFound')));
          break;
        case '00001':
          reject(new Error(this.statuscodeService.statusCode('NetworkError')));
          break;
        default:
          resolve(true);
          break;
      }
    })
  }
  // requestAccessCode(opaqueVoterId: string): Promise<void> {
  //   return new Promise((resolve, reject) => {
  //       switch(opaqueVoterId) {
  //     case '00000' || 'T0000':
  //         reject(new Error(this.statuscodeService.statusCode('VoterRecordNotFound')));
  //         break;
  //     case '0000' || 'T0001':
  //         reject(new Error(this.statuscodeService.statusCode('NetworkError')))
  //         break;
  //     default:
  //         resolve();
  //       }
  //   })
  // }

  validateAccessCode(code, email) {
    return new Promise((resolve, reject) => {
      this.cachedAccessCode = code
      switch (code) {
        case '00002':
          reject(new Error(this.statuscodeService.statusCode('CallOutOfOrderError')));
          break;
        case '00003':
          reject(new Error(this.statuscodeService.statusCode('AccessCodeExpired')));
          break;
        case '00004':
          reject(new Error(this.statuscodeService.statusCode('AccessCodeInvalid')));
          break;
        case '00005':
          reject(new Error(this.statuscodeService.statusCode('NetworkError')));
          break;
        default:
          resolve(true);
          break;
      }
    })
  }
  // Should not be idempotent.  Instead, permute one of
  // john's sample strings.
  constructBallotCryptograms(cvr) {
    return new Promise((resolve, reject) => {
      switch (this.cachedAccessCode) {
        case '00006':
          reject(new Error(this.statuscodeService.statusCode('CallOutOfOrderError')));
          break;
        case '00007':
          reject(new Error(this.statuscodeService.statusCode('NetworkError')));
          break;
        case '00008':
          reject(new Error(this.statuscodeService.statusCode('CorruptCVRError')));
        default:
          resolve('zyx098-wvu765-tsr432-1234');
          break;
      }
    })
  }

  spoilBallotCryptograms(code) {
    return new Promise((resolve, reject) => {
      switch (this.cachedAccessCode) {
        case '00009':
          reject(new Error(this.statuscodeService.statusCode('CallOutOfOrderError')));
        case '00010':
          reject(new Error(this.statuscodeService.statusCode('NetworkError')));
        case '00011':
          reject(new Error(this.statuscodeService.statusCode('ServerCommitmentError')));
        default:
          resolve(true);
      }
    })
  }

  submitBallotCryptograms(code) {
    return new Promise((resolve, reject) => {
      switch (this.cachedAccessCode) {
        case '00012':
          reject(new Error(this.statuscodeService.statusCode('NetworkError')));
        case '00013':
          reject(new Error(this.statuscodeService.statusCode('CallOutOfOrderError')));
        default:
          resolve({
            previousBoardHash: 'tsr432-wvu765-zyx098-4321',
            boardHash: 'zyx098-wvu765-tsr432-1234',
            registeredAt: '2020-03-01T10:00:00.000+01:00',
            serverSignature: 'dbcce518142b8740a5c911f727f3c02829211a8ddfccabeb89297877e4198bc1,46826ddfccaac9ca105e39c8a2d015098479624c411b4783ca1a3600daf4e8fa',
            voteSubmissionId: 6
          })
      }
    });
  }
  generateTestCode(): string {
    return '5e4d8fe41fa3819cc064e2ace0eda8a847fe322594a6fd5a9a51c699e63804b7'
  }


  test(code) {
    this.purgeData();
    this.requestAccessCode(code);
    this.validateAccessCode(code, '');
    this.constructBallotCryptograms(code);
    this.spoilBallotCryptograms(code);
    this.constructBallotCryptograms(code);
    this.submitBallotCryptograms(code).then(receipt => {
      console.log(receipt)
    });
  }
  async presentAlertEmpty(Error) {
    const alert = await this.alertctrl.create({
      message: Error,
      buttons: [{
        text: 'Okay',
        role: 'cancel',
        cssClass: 'secondary',
        handler: (blah) => {}
      }]
    });
    await alert.present();
  }
}
