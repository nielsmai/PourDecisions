import React, { useState } from 'react';

function logInAccount() {




    return (
        <div>
            <div class="boxLogInAccount">
            <div class="row">
            <div class="columnLeft">
                <h1>Put Image Here</h1>
            </div>
            <div class="columnRight">
                <div>

                    <h1 class="loginTitle">Login</h1>

                    <div>
                        <form>
                            <div>
                             <h4 class="username">Username</h4>
                            </div>

                            <input type="text" name="name" />
                            
                        </form>
                    </div>

                    <div class="formBottom"><form>
                        <div><h4 class="password">
                            Password
                        </h4>
                        </div>
                        <input type="text" name="name" />
                        </form>
                    </div>

                    <div class="loginButton">
                        <button type="button" class="loginConfirm">Login</button>
                    </div>

                    <div class="forgetAccount">
                        <label>Don't have an account?</label>
                    </div>

                    <div class="signUp">
                        <label>Sign Up</label>
                    </div>

                    


                </div>

            </div>
        </div>
        </div>
        </div>






    );






} export default logInAccount