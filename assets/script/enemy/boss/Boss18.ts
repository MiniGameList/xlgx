import { _decorator, Component, Node } from 'cc';
import { em } from '../../global/EventManager';
import { Boss } from './Boss';
const { ccclass, property } = _decorator;

@ccclass('Boss18')
export class Boss18 extends Boss {
    _skillData = {
        "normalParticle": {
            "name": "normalParticle",
            "damage": 200000,
            "duration": 3,
            "moveSpeed": 600,
            "canAttackTimes": 1,
        },
    };

    onLoad() {
        let bossData = em.dispatch("usingHeroBasePropertyFun","getBossDataById",18);
        bossData.canMove = true;
        this._skillData.normalParticle.damage = bossData.normalDamage;
        this.initBossInfo(bossData);
        this.setBossStrategy();
    }
    setBossStrategy() {
        this.schedule(() => {
            this.usingNormalParticleOneShot(0.5);
        }, 0.8);
        this.schedule(() => {
            this.usingNormalParticleCircle(12, 50, 0.5);
        }, 2);
    }
}

